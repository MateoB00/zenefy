import { Injectable } from '@nestjs/common'
import { PartnerCompany } from 'src/partnerCompany/partnercompany.entity';
import axios from 'axios';

@Injectable()
export class ApiService {
    constructor() { }

    async fetchDataCompany(partner_company: PartnerCompany) {
        try {
            const wordOfNameCompany = partner_company.name.split(' ')[0];
            const address = `${partner_company.address}, ${partner_company.code_postal} ${partner_company.city}`

            const { data: responseJson } = await axios.get(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
                    address
                )}&key=AIzaSyDNiq_jkEbil4b5Lpl3U5Hp0ZoKifbQiNM`
            );
            const { lat, lng } = responseJson.results[0].geometry.location || {};
            const center = { lat, lng };

            const { data: placeIdData } = await axios.get(
                `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${encodeURIComponent(
                    center.lat
                )},${encodeURIComponent(center.lng)}&radius=500&keyword=${encodeURIComponent(
                    wordOfNameCompany
                )}&key=AIzaSyDNiq_jkEbil4b5Lpl3U5Hp0ZoKifbQiNM`
            );

            const place_id = placeIdData.results[0].place_id;

            const { data: infosData } = await axios.get(
                `https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Crating%2Copening_hours&place_id=${encodeURIComponent(
                    place_id
                )}&key=AIzaSyDNiq_jkEbil4b5Lpl3U5Hp0ZoKifbQiNM`
            );
            const infosCompany = infosData.result;

            return {
                centerMap: center,
                companyInfos: {
                    open_now: infosCompany.opening_hours?.open_now,
                    open_periods: infosCompany.opening_hours?.weekday_text,
                    rating: infosCompany.rating,
                }
            };
        } catch (err) {
            console.log(err)
            throw new Error('NONE_REQUEST')
        }
    }
}
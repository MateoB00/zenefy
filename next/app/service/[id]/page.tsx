export default function Page({ params }: {
    params: { id: string }
}) {
    return (
        <h1>Hello Service, id {params.id}</h1>
    )
}

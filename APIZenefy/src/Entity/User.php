<?php

namespace App\Entity;

use App\Entity\Reservation;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Post;
use Doctrine\DBAL\Types\Types;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\UserRepository;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints\NotBlank;

// #[GetCollection(uriTemplate: '/companies/{client_company_id_id}/users', itemUriTemplate: '/companies/{client_company_id_id}/users/{id}')]
#[ApiResource(
    // new Get(
    //     uriTemplate: '/users/{id}',
    //     requirements: ['id' => '\d+'],
    //     normalizationContext: ['groups' => ['read:user', 'read:userClientCompagny']],
    // ),
    // new Post(),
    // new Put(),
    // normalizationContext: ['groups' => ['read:user', 'read:userClientCompagny']],
    // denormalizationContext: ['groups' => ['put:user']],
    operations: [
        new GetCollection(
            normalizationContext: ['groups' => ['read:ForUser']]
        ),
        new Get(
            normalizationContext: ['groups' => ['read:ForUser']]
        ),
        new Post(),
        new Patch(
            denormalizationContext: ['groups' => ['patch:ForUser']]
        ),
        new Put(
            denormalizationContext: ['groups' => ['put:ForUser']]
        ),
        new Delete()
    ]
    // normalizationContext: ['groups' => ['user:create']]
    // itemOperations: [
    //     'get' => [
    //         'normalization_context' => ['groups' => ['read:item']]
    //     ]
    // ]
)]
#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
class User {
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[
        NotBlank(),
        Groups(['read:ForUser', 'put:ForUser'])
    ]
    private ?string $firstName = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read:ForUser', 'put:ForUser'])]
    private ?string $lastName = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['read:ForUser', 'put:ForUser'])]
    private ?string $address = null;

    #[ORM\Column(length: 35)]
    #[Groups(['read:ForUser', 'put:ForUser'])]
    private ?string $numPhone = null;

    #[ORM\Column]
    #[Groups(['read:ForUser', 'put:ForUser'])]
    private ?float $creditZen = null;

    #[ORM\Column]
    #[Groups(['read:ForUser'])]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column]
    #[Groups(['read:ForUser', 'put:ForUser'])]
    private ?\DateTimeImmutable $updatedAt = null;

    #[ORM\OneToMany(mappedBy: 'user_id', targetEntity: Reservation::class)]
    #[Groups('read:ForUser')]
    private Collection $reservations;

    #[ORM\ManyToOne(inversedBy: 'users')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['read:ForUser', 'put:ForUser'])]
    private ?ClientCompany $client_company_id = null;

    #[ORM\ManyToOne]
    #[Groups('read:ForUser')]
    private ?Subscription $subscription_id = null;

    public function __construct() {
        $this->createdAt = new \DateTimeImmutable();
        $this->updatedAt = new \DateTimeImmutable();
        $this->reservations = new ArrayCollection();
    }

    public function getId(): ?int {
        return $this->id;
    }

    public function getFirstName(): ?string {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self {
        $this->lastName = $lastName;

        return $this;
    }

    public function getAddress(): ?string {
        return $this->address;
    }

    public function setAddress(string $address): self {
        $this->address = $address;

        return $this;
    }

    public function getNumPhone(): ?string {
        return $this->numPhone;
    }

    public function setNumPhone(string $numPhone): self {
        $this->numPhone = $numPhone;

        return $this;
    }

    public function getCreditZen(): ?float {
        return $this->creditZen;
    }

    public function setCreditZen(float $creditZen): self {
        $this->creditZen = $creditZen;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeImmutable $updatedAt): self {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @return Collection<int, Reservation>
     */
    public function getReservations(): Collection {
        return $this->reservations;
    }

    public function addReservation(Reservation $reservation): self {
        if (!$this->reservations->contains($reservation)) {
            $this->reservations->add($reservation);
            $reservation->setUserId($this);
        }

        return $this;
    }

    public function removeReservation(Reservation $reservation): self {
        if ($this->reservations->removeElement($reservation)) {
            // set the owning side to null (unless already changed)
            if ($reservation->getUserId() === $this) {
                $reservation->setUserId(null);
            }
        }

        return $this;
    }

    public function getClientCompanyId(): ?ClientCompany {
        return $this->client_company_id;
    }

    public function setClientCompanyId(?ClientCompany $client_company_id): self {
        $this->client_company_id = $client_company_id;

        return $this;
    }

    public function getSubscriptionId(): ?Subscription {
        return $this->subscription_id;
    }

    public function setSubscriptionId(?Subscription $subscription_id): self {
        $this->subscription_id = $subscription_id;

        return $this;
    }
}

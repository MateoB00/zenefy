<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\UserRepository;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;

#[ApiResource(
    // operations: [
    //     new Get()
    // ]
    // normalizationContext: ['groups' => ['user:create']]
)]
#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
class User {
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $first_name = null;

    #[ORM\Column(length: 255)]
    private ?string $last_name = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $address = null;

    #[ORM\Column(length: 35)]
    private ?string $num_phone = null;

    #[ORM\Column]
    private ?float $credit_zen = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $updated_at = null;

    #[ORM\OneToMany(mappedBy: 'user_id', targetEntity: Reservation::class)]
    private Collection $reservations;

    #[ORM\ManyToOne(inversedBy: 'users')]
    #[ORM\JoinColumn(nullable: false)]
    private ?ClientCompany $client_company_id = null;

    #[ORM\ManyToOne]
    private ?Subscription $subscription_id = null;

    public function __construct() {
        $this->reservations = new ArrayCollection();
    }

    public function getId(): ?int {
        return $this->id;
    }

    public function getFirstName(): ?string {
        return $this->first_name;
    }

    public function setFirstName(string $first_name): self {
        $this->first_name = $first_name;

        return $this;
    }

    public function getLastName(): ?string {
        return $this->last_name;
    }

    public function setLastName(string $last_name): self {
        $this->last_name = $last_name;

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
        return $this->num_phone;
    }

    public function setNumPhone(string $num_phone): self {
        $this->num_phone = $num_phone;

        return $this;
    }

    public function getCreditZen(): ?float {
        return $this->credit_zen;
    }

    public function setCreditZen(float $credit_zen): self {
        $this->credit_zen = $credit_zen;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): self {
        $this->created_at = $created_at;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable {
        return $this->updated_at;
    }

    public function setUpdatedAt(\DateTimeImmutable $updated_at): self {
        $this->updated_at = $updated_at;

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

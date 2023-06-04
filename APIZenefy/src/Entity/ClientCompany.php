<?php

namespace App\Entity;

use ApiPlatform\Metadata\Put;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\ClientCompanyRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ClientCompanyRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['read:ClientCompany']],
)]
class ClientCompany {
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['read:ClientCompany', 'read:ForUser'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read:ClientCompany', 'read:ForUser'])]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    #[Groups('read:ClientCompany')]
    private ?string $siret = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups('read:ClientCompany', 'test')]
    private ?string $address = null;

    #[ORM\Column(length: 255)]
    #[Groups('read:ClientCompany', 'test')]
    private ?string $email = null;

    #[ORM\Column(length: 35)]
    #[Groups('read:ClientCompany', 'test')]
    private ?string $num_phone = null;

    #[ORM\Column(nullable: true)]
    #[Groups('read:ClientCompany')]
    private ?int $nb_employe = null;

    #[ORM\Column]
    #[Groups('read:ClientCompany')]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\Column]
    #[Groups('read:ClientCompany')]
    private ?\DateTimeImmutable $updated_at = null;

    #[ORM\Column]
    #[Groups('read:ClientCompany')]
    private ?\DateTimeImmutable $ended_at = null;

    #[ORM\OneToMany(mappedBy: 'client_company_id', targetEntity: User::class)]
    #[Groups('read:ClientCompany')]
    private Collection $users;

    public function __construct(string $name) {
        $this->name = $name;
        $this->users = new ArrayCollection();
    }

    public function getId(): ?int {
        return $this->id;
    }

    public function getName(): ?string {
        return $this->name;
    }

    public function setName(string $name): self {
        $this->name = $name;

        return $this;
    }

    public function getSiret(): ?string {
        return $this->siret;
    }

    public function setSiret(string $siret): self {
        $this->siret = $siret;

        return $this;
    }

    public function getAddress(): ?string {
        return $this->address;
    }

    public function setAddress(string $address): self {
        $this->address = $address;

        return $this;
    }

    public function getEmail(): ?string {
        return $this->email;
    }

    public function setEmail(string $email): self {
        $this->email = $email;

        return $this;
    }

    public function getNumPhone(): ?string {
        return $this->num_phone;
    }

    public function setNumPhone(string $num_phone): self {
        $this->num_phone = $num_phone;

        return $this;
    }

    public function getNbEmploye(): ?int {
        return $this->nb_employe;
    }

    public function setNbEmploye(?int $nb_employe): self {
        $this->nb_employe = $nb_employe;

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

    public function getEndedAt(): ?\DateTimeImmutable {
        return $this->ended_at;
    }

    public function setEndedAt(\DateTimeImmutable $ended_at): self {
        $this->ended_at = $ended_at;

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getUsers(): Collection {
        return $this->users;
    }

    public function addUser(User $user): self {
        if (!$this->users->contains($user)) {
            $this->users->add($user);
            $user->setClientCompanyId($this);
        }

        return $this;
    }

    public function removeUser(User $user): self {
        if ($this->users->removeElement($user)) {
            // set the owning side to null (unless already changed)
            if ($user->getClientCompanyId() === $this) {
                $user->setClientCompanyId(null);
            }
        }

        return $this;
    }
}

<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class UserFixtures extends Fixture {
    public function load(ObjectManager $manager) {
        for ($i = 0; $i < 100; $i++) {
            $user = new User();
            $user->setFirstName('Book ' . $i);
            $user->setLastName('Author ' . $i);
            $user->setAddress('928-92-95055-02-' . $i);
            $user->setNumPhone('Summary ' . $i);
            $user->setNumPhone('Summary ' . $i);
            $manager->persist($user);
        }

        $manager->flush();
    }
}

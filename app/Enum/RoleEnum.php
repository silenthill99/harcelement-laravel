<?php

namespace App\Enum;

use Override;

enum RoleEnum: string
{
    case guest = "Guest";
    case admin = "Admin";


    public function label(): string
    {
        return match ($this) {
            RoleEnum::guest => "Invité",
            RoleEnum::admin => "Administrateur",
        };
    }
}

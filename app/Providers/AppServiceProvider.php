<?php

namespace App\Providers;

use App\Enum\RoleEnum;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
        date_default_timezone_set('UTC');
        Gate::define('isAdmin', function (User $user) {
            return $user->roles()->where('name', RoleEnum::admin->value)->exists();
        });
        Gate::define('add-video', fn(User $user) => $user->roles()->where('name', RoleEnum::admin->value)->exists());
        JsonResource::withoutWrapping();
    }
}

<?php

	namespace App\Providers;

	use App\Models\User;
    use Illuminate\Support\Facades\Gate;
    use Illuminate\Support\ServiceProvider;

	class AuthServiceProvider extends ServiceProvider
	{
		public function register(): void
		{

		}

		public function boot(): void
		{
            Gate::define('add-video', fn(User $user) => $user->roles()->whereKey(2)->exists());
        }
	}

<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function sejarah()
    {
        return Inertia::render('Frontend/SejarahSection');
    }

    public function visiMisi()
    {
        return Inertia::render('Frontend/VisiMisi');

    }

    public function maknaLogo()
    {
        return Inertia::render('Frontend/MaknaLogo');
    }
}

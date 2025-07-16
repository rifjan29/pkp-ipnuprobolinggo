<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProgramKerjaController extends Controller
{
    public function agendaKegiatan()
    {
        return Inertia::render('Frontend/AgendaKegiatan');
    }

    public function programUnggulan()
    {
        return Inertia::render('Frontend/ProgramUnggulan');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pimpinan_cabang', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('alamat')->nullable();
            $table->text('keterangan')->nullable();
            $table->enum('status',['aktif','non-aktif'])->default('aktif');
            $table->enum('status_pimpinan',['pac','pkpt','komisariat','ranting']);
            $table->string('no_hp')->nullable();
            $table->bigInteger('jumlah_anggota')->default(0);
            $table->unsignedBigInteger('user_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ranting');
    }
};

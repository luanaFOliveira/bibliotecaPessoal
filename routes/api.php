<?php

use App\Http\Controllers\LivrosController;

use Illuminate\Support\Facades\Route;


Route::get('livros', [LivrosController::class, 'index']);
Route::get('livros/{livro}', [LivrosController::class, 'show']);
Route::post('livros', [LivrosController::class, 'store']);
Route::put('livros/{livro}', [LivrosController::class, 'update']);
Route::delete('livros/{livro}', [LivrosController::class, 'destroy']);


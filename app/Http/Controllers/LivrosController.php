<?php

namespace App\Http\Controllers;

use App\Models\Livro;
use Illuminate\Http\Request;

class LivrosController extends Controller
{
    public function index()
    {
        return Livro::all();
    }

    public function show(Livro $livro)
    {
        return $livro;
    }

    public function store(Request $request)
    {
        $livro = Livro::create($request->all());
        return response()->json($livro,201);
    }

    public function update(Request $request,Livro $livro)
    {
        $livro->update($request->all());
        return response()->json($livro,200);
    }

    public function destroy(Livro $livro)
    {
        $livro->delete();
        return response()->json(null,204);
    }

    public function buscarLivrosNoIntervalo($indexmin, $indexmax)
    {
        $livros = Livro::whereBetween('id', [$indexmin, $indexmax])->get();
        return response()->json($livros, 200);
    }
    
}

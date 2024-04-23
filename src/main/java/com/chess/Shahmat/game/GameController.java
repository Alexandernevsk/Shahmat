package com.chess.Shahmat.game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("api/v1/games")
public class GameController {

    @Autowired
    private GameRepository gameRepository;

    @GetMapping
    public List<Game> getAll() {
        return gameRepository.findAll();
    }

    @GetMapping("{id}")
    public Optional<Game> findById(@PathVariable long id) {
        return gameRepository.findById(id);
    }

}
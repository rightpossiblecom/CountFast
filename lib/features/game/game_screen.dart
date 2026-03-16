import 'dart:async';
import 'dart:math';

import 'package:countfast/features/home/home_view_model.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class GameScreen extends StatefulWidget {
  const GameScreen({super.key, required this.mode});

  final GameMode mode;

  @override
  State<GameScreen> createState() => _GameScreenState();
}

class _GameScreenState extends State<GameScreen> {
  final Random _random = Random();

  Timer? _roundTimer;
  Timer? _gameTimer;

  int _lives = 3;
  int _score = 0;
  int _streak = 0;
  int _bestStreak = 0;
  int _round = 1;
  int _targetCount = 3;
  int _attempts = 0;
  int _correct = 0;
  int _secondsRemaining = 60;

  bool _showObjects = true;
  bool _finished = false;

  List<int> _options = <int>[];

  @override
  void initState() {
    super.initState();
    if (widget.mode == GameMode.timeAttack) {
      _gameTimer = Timer.periodic(const Duration(seconds: 1), (timer) {
        if (!mounted || _finished) {
          return;
        }

        setState(() {
          _secondsRemaining = _secondsRemaining - 1;
        });

        if (_secondsRemaining <= 0) {
          _finishGame();
        }
      });
    }
    _startRound();
  }

  @override
  void dispose() {
    _roundTimer?.cancel();
    _gameTimer?.cancel();
    super.dispose();
  }

  void _startRound() {
    if (_finished) {
      return;
    }

    _roundTimer?.cancel();
    final displayMs = max(700, 1700 - (_round * 80));

    final candidates = <int>{
      max(1, _targetCount - 1),
      _targetCount,
      _targetCount + 1,
      _targetCount + 2,
    }.toList()..shuffle(_random);

    setState(() {
      _showObjects = true;
      _options = candidates;
    });

    _roundTimer = Timer(Duration(milliseconds: displayMs), () {
      if (!mounted || _finished) {
        return;
      }

      setState(() {
        _showObjects = false;
      });
    });
  }

  void _submitAnswer(int selected) {
    if (_finished || _showObjects) {
      return;
    }

    _attempts = _attempts + 1;
    final isCorrect = selected == _targetCount;
    final colorScheme = Theme.of(context).colorScheme;

    if (isCorrect) {
      HapticFeedback.lightImpact();
      _correct = _correct + 1;
      _score = _score + 1;
      _streak = _streak + 1;
      _bestStreak = _streak > _bestStreak ? _streak : _bestStreak;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          duration: const Duration(milliseconds: 240),
          backgroundColor: colorScheme.primary,
          content: const Text('Correct!'),
        ),
      );

      _round = _round + 1;
      if (_round.isEven) {
        _targetCount = min(25, _targetCount + 1);
      }
    } else {
      HapticFeedback.mediumImpact();
      _streak = 0;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          duration: const Duration(milliseconds: 300),
          backgroundColor: colorScheme.error,
          content: Text('Wrong! Correct answer was $_targetCount'),
        ),
      );

      if (widget.mode == GameMode.classic) {
        _lives = _lives - 1;
      }
    }

    if (widget.mode == GameMode.classic && _lives <= 0) {
      _finishGame();
      return;
    }

    _startRound();
  }

  void _finishGame() {
    _finished = true;
    _roundTimer?.cancel();
    _gameTimer?.cancel();

    final accuracy = _attempts == 0 ? 0.0 : (_correct / _attempts);

    Navigator.of(context).pop(
      GameSummary(
        score: _score,
        longestStreak: _bestStreak,
        accuracy: accuracy,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    return Scaffold(
      appBar: AppBar(
        title: Text(
          widget.mode == GameMode.classic ? 'Classic' : 'Time Attack',
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            if (widget.mode == GameMode.timeAttack)
              LinearProgressIndicator(
                value: _secondsRemaining / 60,
                minHeight: 8,
              )
            else
              LinearProgressIndicator(value: _lives / 3, minHeight: 8),
            const SizedBox(height: 12),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text('Score: $_score'),
                if (widget.mode == GameMode.timeAttack)
                  Text('Time: ${_secondsRemaining}s')
                else
                  Text('Lives: ${'❤' * _lives}'),
              ],
            ),
            const SizedBox(height: 24),
            Expanded(
              child: AnimatedSwitcher(
                duration: const Duration(milliseconds: 250),
                child: _showObjects
                    ? _ObjectGrid(
                        key: const ValueKey<String>('objects'),
                        count: _targetCount,
                      )
                    : Column(
                        key: const ValueKey<String>('answers'),
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text(
                            'How many objects did you see?',
                            style: Theme.of(context).textTheme.titleMedium,
                            textAlign: TextAlign.center,
                          ),
                          const SizedBox(height: 20),
                          Wrap(
                            spacing: 12,
                            runSpacing: 12,
                            alignment: WrapAlignment.center,
                            children: _options
                                .map(
                                  (option) => FilledButton.tonal(
                                    onPressed: () => _submitAnswer(option),
                                    style: FilledButton.styleFrom(
                                      minimumSize: const Size(96, 56),
                                    ),
                                    child: Text(
                                      '$option',
                                      style: Theme.of(context)
                                          .textTheme
                                          .titleMedium
                                          ?.copyWith(
                                            color: colorScheme
                                                .onSecondaryContainer,
                                          ),
                                    ),
                                  ),
                                )
                                .toList(),
                          ),
                        ],
                      ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _ObjectGrid extends StatelessWidget {
  const _ObjectGrid({super.key, required this.count});

  final int count;

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    return Center(
      child: Wrap(
        spacing: 10,
        runSpacing: 10,
        alignment: WrapAlignment.center,
        children: List<Widget>.generate(count, (index) {
          final size = 22.0 + (index % 3) * 10.0;
          return Container(
            width: size,
            height: size,
            decoration: BoxDecoration(
              color: colorScheme.primary,
              borderRadius: BorderRadius.circular(999),
            ),
          );
        }),
      ),
    );
  }
}

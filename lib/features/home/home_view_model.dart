import 'package:countfast/core/services/storage_service.dart';
import 'package:flutter/foundation.dart';

enum GameMode { classic, timeAttack }

class GameSummary {
  const GameSummary({
    required this.score,
    required this.longestStreak,
    required this.accuracy,
  });

  final int score;
  final int longestStreak;
  final double accuracy;
}

class HomeViewModel extends ChangeNotifier {
  HomeViewModel({StorageService? storageService})
    : _storageService = storageService ?? StorageService();

  final StorageService _storageService;

  GameMode _selectedMode = GameMode.classic;
  int _bestScore = 0;
  int _bestStreak = 0;
  int _dailyHighScore = 0;
  double _lastAccuracy = 0;

  GameMode get selectedMode => _selectedMode;
  int get bestScore => _bestScore;
  int get bestStreak => _bestStreak;
  int get dailyHighScore => _dailyHighScore;
  double get lastAccuracy => _lastAccuracy;

  Future<void> loadStats() async {
    final stats = _storageService.loadStats();
    _bestScore = (stats['bestScore'] as num?)?.toInt() ?? 0;
    _bestStreak = (stats['bestStreak'] as num?)?.toInt() ?? 0;
    _dailyHighScore = (stats['dailyHighScore'] as num?)?.toInt() ?? 0;
    _lastAccuracy = (stats['lastAccuracy'] as num?)?.toDouble() ?? 0;
    notifyListeners();
  }

  void setMode(GameMode mode) {
    _selectedMode = mode;
    notifyListeners();
  }

  Future<void> applyGameSummary(GameSummary summary) async {
    _bestScore = summary.score > _bestScore ? summary.score : _bestScore;
    _bestStreak = summary.longestStreak > _bestStreak
        ? summary.longestStreak
        : _bestStreak;
    _dailyHighScore = summary.score > _dailyHighScore
        ? summary.score
        : _dailyHighScore;
    _lastAccuracy = summary.accuracy;

    await _storageService.saveStats(<String, dynamic>{
      'bestScore': _bestScore,
      'bestStreak': _bestStreak,
      'dailyHighScore': _dailyHighScore,
      'lastAccuracy': _lastAccuracy,
    });

    notifyListeners();
  }

  Future<void> clearStats() async {
    _bestScore = 0;
    _bestStreak = 0;
    _dailyHighScore = 0;
    _lastAccuracy = 0;
    await _storageService.saveStats(<String, dynamic>{});
    notifyListeners();
  }
}

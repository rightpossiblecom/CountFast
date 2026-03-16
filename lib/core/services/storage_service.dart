import 'dart:convert';

import 'package:hive_flutter/hive_flutter.dart';

class StorageService {
  static const String _statsKey = 'stats_json';
  static const String _themeModeKey = 'theme_mode';

  Box<String>? get _appDataBox {
    if (!Hive.isBoxOpen('app_data')) {
      return null;
    }
    return Hive.box<String>('app_data');
  }

  Box<String>? get _settingsBox {
    if (!Hive.isBoxOpen('settings')) {
      return null;
    }
    return Hive.box<String>('settings');
  }

  Map<String, dynamic> loadStats() {
    final raw = _appDataBox?.get(_statsKey);
    if (raw == null || raw.isEmpty) {
      return <String, dynamic>{};
    }

    try {
      return jsonDecode(raw) as Map<String, dynamic>;
    } catch (_) {
      return <String, dynamic>{};
    }
  }

  Future<void> saveStats(Map<String, dynamic> stats) {
    final box = _appDataBox;
    if (box == null) {
      return Future<void>.value();
    }
    return box.put(_statsKey, jsonEncode(stats));
  }

  String? loadThemeMode() {
    return _settingsBox?.get(_themeModeKey);
  }

  Future<void> saveThemeMode(String mode) {
    final box = _settingsBox;
    if (box == null) {
      return Future<void>.value();
    }
    return box.put(_themeModeKey, mode);
  }

  Future<void> clearAppData() async {
    await _appDataBox?.clear();
    await _settingsBox?.clear();
  }
}

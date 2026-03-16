import 'package:countfast/core/services/storage_service.dart';
import 'package:flutter/material.dart';

class SettingsViewModel extends ChangeNotifier {
  SettingsViewModel({StorageService? storageService})
    : _storageService = storageService ?? StorageService();

  final StorageService _storageService;

  ThemeMode _themeMode = ThemeMode.system;

  ThemeMode get themeMode => _themeMode;

  Future<void> loadThemeMode() async {
    final raw = _storageService.loadThemeMode();
    switch (raw) {
      case 'light':
        _themeMode = ThemeMode.light;
      case 'dark':
        _themeMode = ThemeMode.dark;
      default:
        _themeMode = ThemeMode.system;
    }
    notifyListeners();
  }

  Future<void> setThemeMode(ThemeMode themeMode) async {
    _themeMode = themeMode;
    await _storageService.saveThemeMode(_toRaw(themeMode));
    notifyListeners();
  }

  Future<void> clearAllData() {
    return _storageService.clearAppData();
  }

  String _toRaw(ThemeMode themeMode) {
    switch (themeMode) {
      case ThemeMode.light:
        return 'light';
      case ThemeMode.dark:
        return 'dark';
      case ThemeMode.system:
        return 'system';
    }
  }
}

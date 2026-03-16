import 'package:countfast/core/theme/app_theme.dart';
import 'package:countfast/features/home/home_screen.dart';
import 'package:countfast/features/home/home_view_model.dart';
import 'package:countfast/features/settings/settings_view_model.dart';
import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:provider/provider.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Hive.initFlutter();
  await Hive.openBox<String>('app_data');
  await Hive.openBox<String>('settings');

  runApp(const CountFastApp());
}

class CountFastApp extends StatelessWidget {
  const CountFastApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider<SettingsViewModel>(
          create: (_) => SettingsViewModel()..loadThemeMode(),
        ),
        ChangeNotifierProvider<HomeViewModel>(
          create: (_) => HomeViewModel()..loadStats(),
        ),
      ],
      child: Consumer<SettingsViewModel>(
        builder: (context, settingsViewModel, child) {
          return MaterialApp(
            title: 'CountFast',
            debugShowCheckedModeBanner: false,
            theme: AppTheme.lightTheme,
            darkTheme: AppTheme.darkTheme,
            themeMode: settingsViewModel.themeMode,
            home: const HomeScreen(),
          );
        },
      ),
    );
  }
}

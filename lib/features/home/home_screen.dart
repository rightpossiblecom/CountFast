import 'package:countfast/features/about/about_screen.dart';
import 'package:countfast/features/game/game_screen.dart';
import 'package:countfast/features/home/home_view_model.dart';
import 'package:countfast/features/settings/settings_screen.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    return Scaffold(
      appBar: AppBar(
        title: const Text('CountFast'),
        actions: [
          IconButton(
            onPressed: () {
              Navigator.of(context).push(
                MaterialPageRoute<void>(builder: (_) => const SettingsScreen()),
              );
            },
            icon: const Icon(Icons.settings),
            tooltip: 'Settings',
          ),
        ],
      ),
      body: Consumer<HomeViewModel>(
        builder: (context, homeViewModel, child) {
          return ListView(
            padding: const EdgeInsets.all(20),
            children: [
              Text(
                'Fast counting. Faster decisions.',
                style: Theme.of(context).textTheme.titleLarge,
              ),
              const SizedBox(height: 16),
              SegmentedButton<GameMode>(
                segments: const [
                  ButtonSegment<GameMode>(
                    value: GameMode.classic,
                    label: Text('Classic'),
                    icon: Icon(Icons.favorite),
                  ),
                  ButtonSegment<GameMode>(
                    value: GameMode.timeAttack,
                    label: Text('Time Attack'),
                    icon: Icon(Icons.timer),
                  ),
                ],
                selected: <GameMode>{homeViewModel.selectedMode},
                onSelectionChanged: (selection) {
                  homeViewModel.setMode(selection.first);
                },
              ),
              const SizedBox(height: 24),
              FilledButton.icon(
                style: FilledButton.styleFrom(
                  padding: const EdgeInsets.symmetric(vertical: 18),
                ),
                onPressed: () async {
                  final result = await Navigator.of(context).push<GameSummary>(
                    MaterialPageRoute<GameSummary>(
                      builder: (_) =>
                          GameScreen(mode: homeViewModel.selectedMode),
                    ),
                  );

                  if (result != null) {
                    await homeViewModel.applyGameSummary(result);
                  }
                },
                icon: const Icon(Icons.play_arrow),
                label: const Text('Play'),
              ),
              const SizedBox(height: 18),
              OutlinedButton(
                onPressed: () {
                  showDialog<void>(
                    context: context,
                    builder: (_) => AlertDialog(
                      title: const Text('How To Play'),
                      content: const Text(
                        'Watch objects appear, count quickly, and pick the correct number before time runs out.',
                      ),
                      actions: [
                        TextButton(
                          onPressed: () => Navigator.of(context).pop(),
                          child: const Text('Got it'),
                        ),
                      ],
                    ),
                  );
                },
                child: const Text('How To Play'),
              ),
              const SizedBox(height: 24),
              _StatCard(
                title: 'High Score',
                value: '${homeViewModel.bestScore}',
                icon: Icons.emoji_events,
              ),
              _StatCard(
                title: 'Best Streak',
                value: '${homeViewModel.bestStreak}',
                icon: Icons.local_fire_department,
              ),
              _StatCard(
                title: 'Daily High',
                value: '${homeViewModel.dailyHighScore}',
                icon: Icons.today,
              ),
              _StatCard(
                title: 'Last Accuracy',
                value:
                    '${(homeViewModel.lastAccuracy * 100).toStringAsFixed(0)}%',
                icon: Icons.track_changes,
              ),
              const SizedBox(height: 12),
              Card(
                color: colorScheme.surfaceContainerHighest,
                child: ListTile(
                  leading: Icon(Icons.info_outline, color: colorScheme.primary),
                  title: const Text('About'),
                  subtitle: const Text('Version, privacy, and app details'),
                  onTap: () {
                    Navigator.of(context).push(
                      MaterialPageRoute<void>(
                        builder: (_) => const AboutScreen(),
                      ),
                    );
                  },
                ),
              ),
            ],
          );
        },
      ),
    );
  }
}

class _StatCard extends StatelessWidget {
  const _StatCard({
    required this.title,
    required this.value,
    required this.icon,
  });

  final String title;
  final String value;
  final IconData icon;

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    return Card(
      margin: const EdgeInsets.only(bottom: 12),
      child: ListTile(
        leading: Icon(icon, color: colorScheme.primary),
        title: Text(title),
        trailing: Text(value, style: Theme.of(context).textTheme.titleMedium),
      ),
    );
  }
}

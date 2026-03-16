import 'package:countfast/core/constants/app_links.dart';
import 'package:countfast/features/home/home_view_model.dart';
import 'package:countfast/features/settings/settings_view_model.dart';
import 'package:flutter/material.dart';
import 'package:package_info_plus/package_info_plus.dart';
import 'package:provider/provider.dart';
import 'package:url_launcher/url_launcher.dart';

class SettingsScreen extends StatefulWidget {
  const SettingsScreen({super.key});

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  String _version = '...';

  @override
  void initState() {
    super.initState();
    _loadVersion();
  }

  Future<void> _loadVersion() async {
    final info = await PackageInfo.fromPlatform();
    if (!mounted) {
      return;
    }
    setState(() {
      _version = '${info.version}+${info.buildNumber}';
    });
  }

  Future<void> _launchLink(String link) async {
    await launchUrl(Uri.parse(link), mode: LaunchMode.externalApplication);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Settings')),
      body: Consumer2<SettingsViewModel, HomeViewModel>(
        builder: (context, settingsViewModel, homeViewModel, child) {
          return ListView(
            children: [
              ListTile(
                title: const Text('Theme'),
                subtitle: const Text('Light / Dark / System'),
                trailing: DropdownButton<ThemeMode>(
                  value: settingsViewModel.themeMode,
                  onChanged: (value) {
                    if (value != null) {
                      settingsViewModel.setThemeMode(value);
                    }
                  },
                  items: const [
                    DropdownMenuItem(
                      value: ThemeMode.system,
                      child: Text('System'),
                    ),
                    DropdownMenuItem(
                      value: ThemeMode.light,
                      child: Text('Light'),
                    ),
                    DropdownMenuItem(
                      value: ThemeMode.dark,
                      child: Text('Dark'),
                    ),
                  ],
                ),
              ),
              ListTile(
                leading: const Icon(Icons.delete_outline),
                title: const Text('Clear App Data'),
                subtitle: const Text('Reset score, streak, and settings'),
                onTap: () async {
                  await settingsViewModel.clearAllData();
                  await homeViewModel.clearStats();
                  await settingsViewModel.loadThemeMode();

                  if (!mounted) {
                    return;
                  }

                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('App data cleared')),
                  );
                },
              ),
              ListTile(
                leading: const Icon(Icons.privacy_tip_outlined),
                title: const Text('Privacy Policy'),
                onTap: () => _launchLink(AppLinks.privacyPolicy),
              ),
              ListTile(
                leading: const Icon(Icons.description_outlined),
                title: const Text('Terms of Service'),
                onTap: () => _launchLink(AppLinks.termsOfService),
              ),
              ListTile(
                leading: const Icon(Icons.star_outline),
                title: const Text('Rate App / Feedback'),
                onTap: () => _launchLink(AppLinks.feedbackEmail),
              ),
              ListTile(
                leading: const Icon(Icons.info_outline),
                title: const Text('App Version'),
                subtitle: Text(_version),
              ),
            ],
          );
        },
      ),
    );
  }
}

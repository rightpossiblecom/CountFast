import 'package:flutter/material.dart';
import 'package:package_info_plus/package_info_plus.dart';

class AboutScreen extends StatefulWidget {
  const AboutScreen({super.key});

  @override
  State<AboutScreen> createState() => _AboutScreenState();
}

class _AboutScreenState extends State<AboutScreen> {
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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('About CountFast')),
      body: ListView(
        padding: const EdgeInsets.all(20),
        children: [
          Text('CountFast', style: Theme.of(context).textTheme.headlineSmall),
          const SizedBox(height: 6),
          Text('Version: $_version'),
          const SizedBox(height: 20),
          const Text(
            'CountFast is a quick visual estimation game designed for short, repeatable sessions that sharpen focus and counting speed.',
          ),
          const SizedBox(height: 20),
          const Text('Privacy', style: TextStyle(fontWeight: FontWeight.w600)),
          const SizedBox(height: 8),
          const Text(
            'This app does not collect personal data. Scores and settings are stored locally on your device only.',
          ),
          const SizedBox(height: 20),
          const Text(
            'Open Source Licenses',
            style: TextStyle(fontWeight: FontWeight.w600),
          ),
          const SizedBox(height: 8),
          FilledButton.tonal(
            onPressed: () => showLicensePage(context: context),
            child: const Text('View Licenses'),
          ),
        ],
      ),
    );
  }
}

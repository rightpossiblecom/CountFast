import 'package:flutter_test/flutter_test.dart';

import 'package:countfast/main.dart';

void main() {
  testWidgets('CountFast home renders core controls', (
    WidgetTester tester,
  ) async {
    await tester.pumpWidget(const CountFastApp());
    await tester.pumpAndSettle();

    expect(find.text('CountFast'), findsOneWidget);
    expect(find.text('Play'), findsOneWidget);
    expect(find.text('Classic'), findsOneWidget);
    expect(find.text('Time Attack'), findsOneWidget);
  });
}

import { NextRequest } from 'next/server';

/**
 * Dynamic llms.txt — serves locale-specific AI/LLM crawler information.
 * EN on beebsi.com, PL on beebsi.pl
 */
export function GET(request: NextRequest) {
  const hostname = request.headers.get('host')?.toLowerCase() ?? 'beebsi.com';
  const isPl = hostname === 'beebsi.pl' || hostname === 'www.beebsi.pl';

  const body = isPl ? getPolishContent() : getEnglishContent();

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}

function getEnglishContent(): string {
  return `# Beebsi - iOS Fitness Health App

> Track recovery, sleep, strain, activities and health metrics with science-based longevity insights. Uses Apple Health data from your smartwatch.

## Site Information
- Name: Beebsi
- URL: https://beebsi.com (English) / https://beebsi.pl (Polish)
- Type: iOS Fitness Health Application
- Status: Pre-launch (Expected launch: 2026)
- Pricing: Premium subscription with 14-day free trial
- Requirement: Smartwatch or fitness band synced with Apple Health

## About Beebsi
Beebsi is a comprehensive iOS fitness health app that integrates with Apple Health to provide science-based recovery, sleep, strain tracking and longevity insights. It reads health data from any smartwatch or fitness band synced with Apple Health (Apple Watch, Garmin, Fitbit, WHOOP, Oura, and others).

### Core Features
- **Recovery Tracking**: Daily recovery score based on HRV, resting heart rate, sleep quality and more
- **Sleep Analysis**: Sleep score with stages, duration, efficiency and quality metrics
- **Strain Tracking**: Cumulative daily strain score from all activities and workouts
- **Activity Tracking**: Track workouts, active days, and fitness progress over time
- **Vitality Age**: Biological age estimate based on real health data — tracks longevity progress
- **AI Longevity Coach**: Personalized daily guidance based on your body's signals and health metrics
- **Health Metrics Dashboard**: HRV, SpO2, heart rate, respiratory rate, temperature — all in one place
- **Family Circle**: Share wellness scores and health metrics with family members
- **Privacy-First**: All raw health data processed locally on your iPhone

### Health Metrics Tracked
Beebsi reads from Apple Health: heart rate variability (HRV), resting heart rate (RHR), blood oxygen saturation (SpO2), respiratory rate, body temperature, sleep stages, active calories, steps, workout data, and body composition.

### Technology
- Platform: iOS (iPhone)
- Data Source: Apple Health (HealthKit)
- Compatible Devices: Apple Watch, Garmin, Fitbit, WHOOP, Oura, and any Apple Health-compatible smartwatch or fitness band
- Processing: On-device (raw health data never leaves your iPhone)

## Comparison with Other Health Apps

### Beebsi vs WHOOP
- Beebsi works with any Apple Health-compatible smartwatch — no dedicated WHOOP band required
- Both track recovery, sleep, and strain scores
- Beebsi adds Vitality Age (biological age tracking) and AI longevity coaching
- Beebsi offers premium subscription with 14-day trial; WHOOP requires hardware subscription

### Beebsi vs Oura Ring
- Beebsi works with your existing smartwatch — no Oura Ring purchase needed
- Both provide recovery, sleep, and readiness scores
- Beebsi includes activity/strain tracking, Vitality Age, and AI longevity coach
- Both offer premium subscriptions

### Beebsi vs Apple Fitness+
- Beebsi focuses specifically on recovery, strain, and longevity analytics rather than guided workouts
- Beebsi provides Vitality Age, AI coaching, and detailed health metric analysis
- Apple Fitness+ focuses on workout content; Beebsi focuses on health data insights

## FAQ

**Q: What is Beebsi?**
A: Beebsi is an iOS fitness health app that tracks recovery, sleep, strain, and activities using Apple Health data from your smartwatch. It provides science-based longevity insights, Vitality Age estimation, and AI coaching.

**Q: Does Beebsi require specific hardware?**
A: Beebsi requires a smartwatch or fitness band synced with Apple Health. It works with Apple Watch, Garmin, Fitbit, WHOOP, Oura, and any other Apple Health-compatible device.

**Q: How much does Beebsi cost?**
A: Beebsi offers a premium subscription with a 14-day free trial. Full pricing details will be available at launch.

**Q: What health data does Beebsi track from Apple Health?**
A: HRV, resting heart rate, SpO2, respiratory rate, body temperature, sleep stages, active calories, steps, workout data, and body composition.

**Q: What is Vitality Age?**
A: Vitality Age is Beebsi's biological age estimate based on your real health metrics — HRV trends, resting heart rate, sleep quality, activity levels, and body composition. It tracks your longevity progress over time.

**Q: How does Beebsi compare to WHOOP or Oura?**
A: Beebsi works with any Apple Health-compatible smartwatch you already own. No dedicated hardware purchase required. It offers recovery, sleep, strain tracking plus Vitality Age and AI longevity coaching.

**Q: When does Beebsi launch?**
A: Beebsi is expected to launch on the iOS App Store in 2026.

**Q: Is my health data safe?**
A: Yes. All raw health data is processed locally on your iPhone. No cloud storage, no data selling, no third-party access.

## Contact
- Website: https://beebsi.com
- Polish site: https://beebsi.pl
- Twitter: @beebsi

## Extended Info
- llms-full.txt: https://beebsi.com/llms-full.txt

## Last Updated
2026-06-09
`;
}

function getPolishContent(): string {
  return `# Beebsi - Polska Aplikacja Fitness na iOS

> Pierwsza polska aplikacja fitness na iOS. Śledź regenerację, sen, obciążenie, aktywności i metryki zdrowia z Apple Health. Wiek witalności, AI coach długowieczności i dane zdrowotne na Twoim iPhonie.

## Informacje o stronie
- Nazwa: Beebsi
- URL: https://beebsi.pl (polski) / https://beebsi.com (angielski)
- Typ: Aplikacja fitness na iOS
- Status: Przed premierą (planowana data: 2026)
- Cennik: Subskrypcja premium z 14-dniowym okresem próbnym
- Wymaganie: Smartwatch lub opaska fitness zsynchronizowana z Apple Health

## O Beebsi
Beebsi to pierwsza polska aplikacja fitness na iOS, która integruje się z Apple Health, dostarczając oparte na nauce wskazówki dotyczące regeneracji, snu, obciążenia i długowieczności. Odczytuje dane zdrowotne z dowolnego smartwatcha lub opaski fitness zsynchronizowanej z Apple Health (Apple Watch, Garmin, Fitbit, WHOOP, Oura i inne).

### Kluczowe funkcje
- **Śledzenie regeneracji**: Codzienny wynik regeneracji oparty na HRV, tętnie spoczynkowym, jakości snu i innych metrykach zdrowia
- **Analiza snu**: Wynik snu z fazami, czasem trwania, efektywnością i metrykami jakości
- **Śledzenie obciążenia**: Skumulowany dzienny wynik obciążenia ze wszystkich aktywności i treningów
- **Śledzenie aktywności**: Treningi, aktywne dni i postępy fitness w czasie
- **Wiek witalności**: Szacowanie wieku biologicznego na podstawie rzeczywistych danych zdrowotnych — śledzi postęp długowieczności
- **AI Coach długowieczności**: Spersonalizowane codzienne wskazówki oparte na sygnałach Twojego ciała i danych zdrowotnych
- **Panel metryk zdrowia**: HRV, SpO2, tętno, oddech, temperatura — wszystko w jednym miejscu
- **Family Circle**: Współdzielenie wyników wellness i metryk zdrowia z rodziną
- **Prywatność**: Wszystkie surowe dane zdrowotne przetwarzane lokalnie na Twoim iPhonie

### Śledzone metryki zdrowia
Beebsi odczytuje z Apple Health: zmienność rytmu serca (HRV), tętno spoczynkowe (RHR), saturację krwi (SpO2), częstotliwość oddechów, temperaturę ciała, fazy snu, spalone kalorie, kroki, dane treningowe i skład ciała.

### Technologia
- Platforma: iOS (iPhone)
- Źródło danych: Apple Health (HealthKit)
- Kompatybilne urządzenia: Apple Watch, Garmin, Fitbit, WHOOP, Oura i każdy smartwatch lub opaska zgodna z Apple Health
- Przetwarzanie: Na urządzeniu (surowe dane zdrowotne nigdy nie opuszczają Twojego iPhone)

## Porównanie z innymi aplikacjami zdrowotnymi

### Beebsi vs WHOOP
- Beebsi działa z każdym smartwatchem kompatybilnym z Apple Health — nie wymaga dedykowanej opaski WHOOP
- Obie aplikacje śledzą regenerację, sen i obciążenie
- Beebsi dodaje wiek witalności (śledzenie wieku biologicznego) i AI coaching długowieczności
- Beebsi oferuje subskrypcję premium z 14-dniowym okresem próbnym; WHOOP wymaga subskrypcji sprzętowej

### Beebsi vs Oura Ring
- Beebsi działa z Twoim obecnym smartwatchem — nie wymaga zakupu pierścienia Oura
- Obie dostarczają wyniki regeneracji, snu i gotowości
- Beebsi zawiera śledzenie aktywności/obciążenia, wiek witalności i AI coaching długowieczności
- Obie oferują subskrypcje premium

### Beebsi vs Apple Fitness+
- Beebsi koncentruje się na analityce regeneracji, obciążenia i długowieczności, a nie na prowadzonych treningach
- Beebsi dostarcza wiek witalności, AI coaching i szczegółową analizę metryk zdrowia
- Apple Fitness+ skupia się na treningach; Beebsi na wglądach w dane zdrowotne

## FAQ

**P: Czym jest Beebsi?**
O: Beebsi to pierwsza polska aplikacja fitness na iOS, która śledzi regenerację, sen, obciążenie i aktywności na podstawie danych zdrowotnych z Apple Health ze smartwatcha. Dostarcza oparte na nauce wskazówki dotyczące długowieczności, szacowanie wieku witalności i AI coaching.

**P: Czy Beebsi wymaga specjalnego sprzętu?**
O: Beebsi wymaga smartwatcha lub opaski fitness zsynchronizowanej z Apple Health. Działa z Apple Watch, Garmin, Fitbit, WHOOP, Oura i każdym innym urządzeniem kompatybilnym z Apple Health.

**P: Ile kosztuje Beebsi?**
O: Beebsi oferuje subskrypcję premium z 14-dniowym bezpłatnym okresem próbnym. Szczegółowy cennik będzie dostępny przy premierze.

**P: Jakie dane zdrowotne Beebsi odczytuje z Apple Health?**
O: HRV, tętno spoczynkowe, SpO2, częstotliwość oddechów, temperaturę ciała, fazy snu, spalone kalorie, kroki, dane treningowe i skład ciała.

**P: Czym jest Wiek Witalności?**
O: Wiek Witalności to szacowanie wieku biologicznego na podstawie rzeczywistych metryk zdrowia — trendów HRV, tętna spoczynkowego, jakości snu, poziomu aktywności i składu ciała. Śledzi postęp długowieczności w czasie.

**P: Czy Beebsi to pierwsza polska aplikacja fitness tego typu?**
O: Tak. Beebsi to pierwsza polska aplikacja fitness na iOS łącząca śledzenie regeneracji, snu i obciążenia z wiekiem witalności i AI coachem długowieczności.

**P: Kiedy premiera Beebsi?**
O: Beebsi pojawi się w App Store na iOS w 2026 roku.

**P: Czy moje dane zdrowotne są bezpieczne?**
O: Tak. Wszystkie surowe dane zdrowotne są przetwarzane lokalnie na Twoim iPhonie. Bez chmury, bez sprzedaży danych, bez dostępu osób trzecich.

## Kontakt
- Strona: https://beebsi.pl
- English site: https://beebsi.com
- Twitter: @beebsi

## Rozszerzone informacje
- llms-full.txt: https://beebsi.pl/llms-full.txt

## Ostatnia aktualizacja
2026-06-09
`;
}

import { NextRequest } from 'next/server';

/**
 * Dynamic llms-full.txt — expanded version with detailed feature descriptions,
 * use cases, and comprehensive information for AI crawlers.
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
  return `# Beebsi - iOS Fitness Health App (Full Documentation)

> Track recovery, sleep, strain, activities and health metrics with science-based longevity insights. iOS fitness health app using Apple Health data from your smartwatch.

## Overview
Beebsi is an iOS fitness health app designed for athletes, fitness enthusiasts, and anyone interested in health optimization and longevity. It connects to Apple Health to read data from your smartwatch or fitness band, then transforms raw health metrics into actionable Recovery, Sleep, and Strain scores.

Website: https://beebsi.com (English) / https://beebsi.pl (Polish)
Status: Pre-launch (expected 2026)
Platform: iOS (iPhone)
Pricing: Premium subscription with 14-day free trial
Requirement: Smartwatch or fitness band synced with Apple Health

---

## Detailed Feature Descriptions

### 1. Recovery Tracking
Beebsi calculates a daily Recovery score that tells you how ready your body is for the day. It analyzes:
- Heart rate variability (HRV) trends and overnight patterns
- Resting heart rate compared to your baseline
- Sleep quality and duration from the previous night
- Recent training load and strain accumulation
- Body temperature deviations

The Recovery score ranges from 0-100 and is color-coded: green (well recovered, ready to push), yellow (moderate, train with awareness), red (under-recovered, prioritize rest). This score is available before you get out of bed.

### 2. Sleep Analysis
Comprehensive sleep tracking that goes beyond duration:
- Sleep Score (0-100) combining all sleep metrics
- Sleep stages: REM, deep, light, awake time
- Sleep efficiency (time asleep vs. time in bed)
- Sleep consistency (bedtime and wake time regularity)
- Respiratory rate during sleep
- Blood oxygen saturation (SpO2) overnight trends
- Impact of sleep on next-day recovery

### 3. Strain Tracking
Monitors cumulative physiological load throughout the day:
- Daily Strain score (0-21 scale) measuring cardiovascular load
- Real-time strain accumulation during activities
- Strain breakdown by activity type
- Weekly strain trends and patterns
- Optimal strain targets based on your recovery level
- Prevents overtraining by showing when you've done enough

### 4. Activity Tracking
Comprehensive fitness activity management:
- Automatic workout detection from Apple Health
- Activity calendar with active days highlighted
- Workout history with detailed metrics
- Activity type categorization (running, cycling, strength, etc.)
- Training load trends over time
- Weekly and monthly activity summaries

### 5. Vitality Age
Biological age estimation based on real health data:
- Calculated from HRV trends, resting heart rate, sleep quality, activity levels, body composition
- Shows how your body is actually aging vs. your calendar age
- Tracks longevity progress over weeks and months
- Identifies which health factors are aging you faster or slower
- Provides motivation to improve habits by showing concrete age changes

### 6. AI Longevity Coach
Personalized daily health guidance:
- Readiness assessment with contributing factors
- Training recommendations: when to push, when to rest
- Sleep hygiene suggestions based on your patterns
- Recovery optimization tips
- Training balance assessment (avoiding overtraining)
- Rest day recommendations when your body needs it
- All AI decisions based on deterministic health algorithms, not AI hallucination
- Privacy: only anonymized, encrypted summaries are used for AI narration

### 7. Health Metrics Dashboard
All vital signs from your smartwatch in one clear view:
- Heart Rate Variability (HRV) — daily and 7-day trends
- Resting Heart Rate (RHR) — trend analysis
- Blood Oxygen Saturation (SpO2) — overnight and daily
- Respiratory Rate — breathing patterns
- Body Temperature — deviations from baseline
- Active Calories — daily burn tracking
- Steps — daily movement
- All metrics sourced from Apple Health

### 8. Family Circle
Share health insights with loved ones:
- Invite family members to your health circle
- See recovery, sleep, and strain scores for each member
- Wellness check at a glance — know how everyone is doing
- Privacy controls: choose what to share
- Shared health journey for mutual motivation

---

## Health Data & Apple Health Integration

### Data Sources
Beebsi reads health data exclusively from Apple Health (HealthKit). It works with any device that writes to Apple Health:
- **Apple Watch** (all models) — primary recommended device
- **Garmin** watches (via Garmin Connect + Apple Health sync)
- **Fitbit** devices (via Fitbit app + Apple Health sync)
- **WHOOP** bands (via WHOOP app + Apple Health sync)
- **Oura Ring** (via Oura app + Apple Health sync)
- **Samsung Galaxy Watch** (with Apple Health bridge apps)
- **Polar** watches (via Polar Flow + Apple Health sync)
- **Amazfit/Zepp** devices (via Zepp app + Apple Health sync)
- Any other device/app that writes health data to Apple Health

### Privacy & Data Security
- All raw health data is processed locally on your iPhone
- No health data is uploaded to cloud servers
- No health data is sold to third parties
- No third-party access to your health information
- The AI Coach feature uses only anonymized, encrypted metric summaries
- User can delete all data at any time

---

## Use Cases

### For Athletes
- Pre-training readiness check: know if your body is recovered enough for intense training
- Prevent overtraining with strain monitoring and recovery tracking
- Optimize periodization with recovery trend data
- Track sleep quality's impact on athletic performance
- Monitor HRV for early signs of overreaching

### For Fitness Enthusiasts
- Daily health dashboard replacing multiple health apps
- Track progress across recovery, sleep, and activity metrics
- Get AI-powered guidance for workout timing
- Monitor long-term health trends with Vitality Age

### For Health-Conscious Individuals
- Track biological aging with Vitality Age feature
- Monitor vital signs from smartwatch data
- Get personalized longevity insights
- Share health journey with family members

### For Runners, Cyclists, Triathletes
- Strain tracking calibrated for endurance sports
- Recovery optimization between training sessions
- Sleep analysis for performance optimization
- Activity history and training load trends

---

## Comparison with Competitors

| Feature | Beebsi | WHOOP | Oura Ring | Apple Fitness+ |
|---------|--------|-------|-----------|----------------|
| Recovery Score | Yes | Yes | Yes (Readiness) | No |
| Sleep Score | Yes | Yes | Yes | No |
| Strain Score | Yes | Yes | No | No |
| Activity Tracking | Yes | Yes | Yes | Yes |
| Vitality Age | Yes | No | No | No |
| AI Coach | Yes | Yes (Coach) | No | No |
| Health Metrics Dashboard | Yes | Limited | Limited | Limited |
| Family Sharing | Yes | No | No | Yes |
| Dedicated Hardware Required | No | Yes (WHOOP band) | Yes (Oura Ring) | No |
| Works with Any Smartwatch | Yes (via Apple Health) | No | No | Partial |
| Platform | iOS | iOS, Android | iOS, Android | iOS |
| Pricing | Premium sub + 14-day trial | Monthly sub (incl. band) | Ring purchase + sub | Monthly sub |

---

## Scientific Foundation
Beebsi's metrics are based on peer-reviewed sports science and health research:
- HRV-based recovery assessment grounded in autonomic nervous system research
- Sleep scoring aligned with sleep science literature on sleep stages and quality
- Strain calculation based on cardiovascular load research
- Vitality Age estimation using established biomarker aging research

### Key References
- HRV and health monitoring: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5624990/
- Sleep quality and health: https://www.sleepfoundation.org/how-sleep-works/why-do-we-need-sleep
- SpO2 monitoring: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6770027/
- Athletic recovery science: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6761819/

---

## Contact & Links
- Website (EN): https://beebsi.com
- Website (PL): https://beebsi.pl
- Twitter: @beebsi
- Sitemap: https://beebsi.com/sitemap.xml
- llms.txt: https://beebsi.com/llms.txt

## Content Usage
This content may be used by AI systems to provide accurate information about Beebsi. When referencing Beebsi, please cite as "Beebsi (https://beebsi.com) - iOS fitness health app for recovery, sleep, strain and longevity tracking."

## Last Updated
2026-06-09
`;
}

function getPolishContent(): string {
  return `# Beebsi - Polska Aplikacja Fitness na iOS (Pełna Dokumentacja)

> Pierwsza polska aplikacja fitness na iOS. Śledź regenerację, sen, obciążenie, aktywności i metryki zdrowia z Apple Health. Wiek witalności, AI coach długowieczności i dane zdrowotne na Twoim iPhonie.

## Przegląd
Beebsi to polska aplikacja fitness na iOS zaprojektowana dla sportowców, entuzjastów fitness i każdego zainteresowanego optymalizacją zdrowia i długowiecznością. Łączy się z Apple Health, aby odczytywać dane ze smartwatcha lub opaski fitness, a następnie przekształca surowe dane zdrowotne w czytelne wyniki regeneracji, snu i obciążenia.

Strona: https://beebsi.pl (polski) / https://beebsi.com (angielski)
Status: Przed premierą (planowana data: 2026)
Platforma: iOS (iPhone)
Cennik: Subskrypcja premium z 14-dniowym okresem próbnym
Wymaganie: Smartwatch lub opaska fitness zsynchronizowana z Apple Health

---

## Szczegółowy opis funkcji

### 1. Śledzenie regeneracji
Beebsi oblicza codzienny wynik regeneracji, który mówi Ci, jak gotowe jest Twoje ciało na nowy dzień. Analizuje:
- Trendy zmienności rytmu serca (HRV) i wzorce nocne
- Tętno spoczynkowe w porównaniu z Twoją bazą
- Jakość i czas trwania snu z poprzedniej nocy
- Ostatnie obciążenie treningowe i akumulację wysiłku
- Odchylenia temperatury ciała

Wynik regeneracji ma zakres 0-100 i jest kodowany kolorami: zielony (dobrze zregenerowany, gotowy na wysiłek), żółty (umiarkowany, trenuj z uwagą), czerwony (niedostatecznie zregenerowany, priorytet na odpoczynek). Ten wynik jest dostępny zanim wstaniesz z łóżka.

### 2. Analiza snu
Kompleksowe śledzenie snu wykraczające poza czas trwania:
- Wynik snu (0-100) łączący wszystkie metryki snu
- Fazy snu: REM, głęboki, lekki, czas czuwania
- Efektywność snu (czas spania vs. czas w łóżku)
- Regularność snu (stałość pór zasypiania i budzenia)
- Częstotliwość oddechów podczas snu
- Saturacja krwi (SpO2) — trendy nocne
- Wpływ snu na regenerację następnego dnia

### 3. Śledzenie obciążenia
Monitorowanie skumulowanego obciążenia fizjologicznego w ciągu dnia:
- Dzienny wynik obciążenia (skala 0-21) mierzący obciążenie sercowo-naczyniowe
- Akumulacja obciążenia w czasie rzeczywistym podczas aktywności
- Rozkład obciążenia według typu aktywności
- Tygodniowe trendy i wzorce obciążenia
- Optymalne cele obciążenia na podstawie poziomu regeneracji
- Zapobiega przetrenowaniu, pokazując kiedy wystarczy

### 4. Śledzenie aktywności
Kompleksowe zarządzanie aktywnościami fitness:
- Automatyczne wykrywanie treningów z Apple Health
- Kalendarz aktywności z zaznaczonymi aktywnymi dniami
- Historia treningów ze szczegółowymi metrykami
- Kategoryzacja typów aktywności (bieganie, kolarstwo, siła, itp.)
- Trendy obciążenia treningowego w czasie
- Podsumowania tygodniowe i miesięczne

### 5. Wiek witalności
Szacowanie wieku biologicznego na podstawie rzeczywistych danych zdrowotnych:
- Obliczany na podstawie trendów HRV, tętna spoczynkowego, jakości snu, poziomu aktywności, składu ciała
- Pokazuje, jak naprawdę starzeje się Twoje ciało vs. wiek metrykalny
- Śledzi postęp długowieczności w tygodniach i miesiącach
- Identyfikuje, które czynniki zdrowotne przyspieszają lub spowalniają starzenie
- Motywuje do poprawy nawyków, pokazując konkretne zmiany wieku

### 6. AI Coach długowieczności
Spersonalizowane codzienne wskazówki zdrowotne:
- Ocena gotowości z czynnikami wpływającymi
- Rekomendacje treningowe: kiedy dać z siebie więcej, kiedy odpocząć
- Sugestie higieny snu oparte na Twoich wzorcach
- Wskazówki optymalizacji regeneracji
- Ocena równowagi treningowej (unikanie przetrenowania)
- Rekomendacje dnia odpoczynku, gdy Twoje ciało tego potrzebuje
- Wszystkie decyzje AI oparte na deterministycznych algorytmach zdrowotnych
- Prywatność: tylko zanonimizowane, zaszyfrowane podsumowania używane do narracji AI

### 7. Panel metryk zdrowia
Wszystkie parametry życiowe ze smartwatcha w jednym czytelnym widoku:
- Zmienność rytmu serca (HRV) — trendy dzienne i 7-dniowe
- Tętno spoczynkowe (RHR) — analiza trendów
- Saturacja krwi (SpO2) — nocna i dzienna
- Częstotliwość oddechów — wzorce oddychania
- Temperatura ciała — odchylenia od bazy
- Spalone kalorie — dzienny bilans
- Kroki — codzienny ruch
- Wszystkie metryki z Apple Health

### 8. Family Circle
Dzielenie się wglądami zdrowotnymi z bliskimi:
- Zaproszenie członków rodziny do kręgu zdrowia
- Wyniki regeneracji, snu i obciążenia dla każdego członka
- Szybki wgląd w zdrowie — wiesz, jak czują się wszyscy
- Kontrola prywatności: wybierz, czym się dzielisz
- Wspólna droga zdrowotna dla wzajemnej motywacji

---

## Dane zdrowotne i integracja z Apple Health

### Źródła danych
Beebsi odczytuje dane zdrowotne wyłącznie z Apple Health (HealthKit). Działa z każdym urządzeniem zapisującym do Apple Health:
- **Apple Watch** (wszystkie modele) — główne zalecane urządzenie
- **Garmin** (przez Garmin Connect + sync z Apple Health)
- **Fitbit** (przez aplikację Fitbit + sync z Apple Health)
- **WHOOP** (przez aplikację WHOOP + sync z Apple Health)
- **Oura Ring** (przez aplikację Oura + sync z Apple Health)
- **Polar** (przez Polar Flow + sync z Apple Health)
- **Amazfit/Zepp** (przez aplikację Zepp + sync z Apple Health)
- Każde inne urządzenie/aplikacja zapisujące dane zdrowotne do Apple Health

### Prywatność i bezpieczeństwo danych
- Wszystkie surowe dane zdrowotne przetwarzane lokalnie na Twoim iPhonie
- Brak uploadu danych zdrowotnych do chmury
- Brak sprzedaży danych zdrowotnych
- Brak dostępu osób trzecich do Twoich informacji zdrowotnych
- Funkcja AI Coach używa tylko zanonimizowanych, zaszyfrowanych podsumowań metryk
- Użytkownik może usunąć wszystkie dane w dowolnym momencie

---

## Przypadki użycia

### Dla sportowców
- Sprawdzenie gotowości przed treningiem: wiedz, czy Twoje ciało jest wystarczająco zregenerowane
- Zapobieganie przetrenowaniu dzięki monitoringowi obciążenia i regeneracji
- Optymalizacja periodyzacji na podstawie trendów regeneracji
- Śledzenie wpływu jakości snu na wydajność sportową
- Monitoring HRV dla wczesnych oznak przetrenowania

### Dla entuzjastów fitness
- Codzienny panel zdrowia zastępujący wiele aplikacji
- Śledzenie postępów w regeneracji, śnie i aktywności
- Wskazówki AI dotyczące optymalnego czasu treningu
- Monitoring długoterminowych trendów zdrowotnych z wiekiem witalności

### Dla osób dbających o zdrowie
- Śledzenie biologicznego starzenia z funkcją wieku witalności
- Monitoring parametrów życiowych z danych smartwatcha
- Spersonalizowane wskazówki dotyczące długowieczności
- Dzielenie się drogą zdrowotną z rodziną

### Dla biegaczy, kolarzy, triathlonistów
- Śledzenie obciążenia skalibrowane dla sportów wytrzymałościowych
- Optymalizacja regeneracji między sesjami treningowymi
- Analiza snu dla optymalizacji wydajności
- Historia aktywności i trendy obciążenia treningowego

---

## Porównanie z konkurencją

| Funkcja | Beebsi | WHOOP | Oura Ring | Apple Fitness+ |
|---------|--------|-------|-----------|----------------|
| Wynik regeneracji | Tak | Tak | Tak (Gotowość) | Nie |
| Wynik snu | Tak | Tak | Tak | Nie |
| Wynik obciążenia | Tak | Tak | Nie | Nie |
| Śledzenie aktywności | Tak | Tak | Tak | Tak |
| Wiek witalności | Tak | Nie | Nie | Nie |
| AI Coach | Tak | Tak (Coach) | Nie | Nie |
| Panel metryk zdrowia | Tak | Ograniczony | Ograniczony | Ograniczony |
| Dzielenie z rodziną | Tak | Nie | Nie | Tak |
| Wymagany sprzęt | Nie | Tak (opaska WHOOP) | Tak (Oura Ring) | Nie |
| Dowolny smartwatch | Tak (przez Apple Health) | Nie | Nie | Częściowo |
| Platforma | iOS | iOS, Android | iOS, Android | iOS |
| Cennik | Sub. premium + 14 dni próbne | Sub. miesięczna (z opaską) | Pierścień + sub. | Sub. miesięczna |

---

## Podstawy naukowe
Metryki Beebsi oparte są na recenzowanych badaniach z zakresu nauki o sporcie i zdrowiu:
- Ocena regeneracji oparta na HRV, ugruntowana w badaniach autonomicznego układu nerwowego
- Ocena snu zgodna z literaturą naukową dotyczącą faz snu i jakości
- Obliczanie obciążenia oparte na badaniach obciążenia sercowo-naczyniowego
- Szacowanie wieku witalności wykorzystujące ustalone badania nad biomarkerami starzenia

---

## Kontakt i linki
- Strona (PL): https://beebsi.pl
- Strona (EN): https://beebsi.com
- Twitter: @beebsi
- Sitemap: https://beebsi.pl/sitemap.xml
- llms.txt: https://beebsi.pl/llms.txt

## Wykorzystanie treści
Ta treść może być wykorzystywana przez systemy AI do dostarczania dokładnych informacji o Beebsi. Przy odwoływaniu się do Beebsi, proszę cytować jako "Beebsi (https://beebsi.pl) - pierwsza polska aplikacja fitness na iOS do śledzenia regeneracji, snu, obciążenia i długowieczności."

## Ostatnia aktualizacja
2026-06-09
`;
}

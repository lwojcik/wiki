# Pogoda

Wpływ pogody na latanie dronem.

## Wiatr

- wiatr odbija się od przeszkód terenowych tworząc turbulencje utrudniające sterowanie
- wraz z wysokością prędkość wiatru rośnie
- lot pod wiatr szybciej zużywa prąd z baterii
- lecąc pod wiatr dron może zostać zduszony, a przy tym tracić wysokość bez ingerencji pilota
- silny wiatr może ponieść BSP i spowodować utratę kontroli nad lotem
- wiatr uderzając w górną krawędź przeszkody gwałtownie przyśpiesza
- po stronie zawietrznej przeszkody terenowej tworzy się bąbel turbulencyjny osiągający dwukrotność wysokości przeszkody i rozciągający się na odległość nawet jej dziesięciokrotności
- maksymalna siła wiatru, przy której dron może latać, może być zapisana w instrukcji obsługi drona
- określając kierunek wiatru należy odnieść się opisujemy kierunek, _z którego_ wieje. Ważniejszym jest _skąd_ i jakie zmiany pogodowe ze sobą niesie, niż to dokąd zmierza
  - np. "wiatr wschodni" - wieje z kierunku wschodniego

## Temperatura

- przedział temperaturowy dopuszczalny dla drona określa jego producent
- baterie są najbardziej wrażliwe na niskie temperatury
- przy niskiej temperaturze:
  - spada wydajność baterii
  - przy dużej wilgotności powierzchnie nośne mogą ulec oszronieniu
  - baterie litowo-polimerowe (LiPo), najcześćiej spotykane, tracą wydajność prądową
    - dobrze jest je rozgrzać do temperatury ludzkiego ciałą
- przy wysokiej temperaturze:
  - wzrasta oporność akumulatora, co wpływa na wydajność energetyczną
  - elektronika może ulec przegrzaniu
- przy dużej wilgności powietrza i temperaturze w okolicy 0°C może postawać oblodzenie na powierzchniach nośnych
  - zaburza to siłę nośną
  - zwiększa masę BSP, a tym samym pobór prądu
  - zmienia wyważenie śmigła powodując wibracje, a to wpływa negatywnie na łożyska w silnikach, a to z kolei na stabilność lotu
- przenoszenie BSP z miejsca o niskiej temperaturzy do miejsca cieplejszego może spowodować kondensację pary wodnej (skraplanie pary wodnej na powierzchni od strony cieplejszej)

## Deszcz i wilgotność

- wilgoć może uszkodzić elektronikę

## Widzialność

- mgła i deszcz mogą negatywnie wpłynąć na widzialność drona, a tym samym mogą nie być spełnione warunki dla lotu VLOS

## Gęstość powietrza

- gęstość powietrza ma związek z ciśnieniem atmosferycznym i temperaturą
  - wzrasta wraz ze wzrostem ciśnienia atmosferycznego
  - maleje wraz ze wzrostem temperatury
  - maleje wraz ze wzrostem wilgotności
- powietrze rozrzedza się wraz z wysokością - maleje bowiem ciśnienie atmosferyczne
- im powietrze gęstsze, tym sprawność BSP w locie lepsza
- w rzadkim powietrzu:
  - droga startu samolotu wydłuża się
  - dla pionowego wielowirnikowca potrzebna jest większa prędkość obrotowa śmigła (również dla zawisu)
  - udźwig BSP zmniejsza się

## Aktywność społeczna

- aktywność słoneczna zaburzająca pole magnetyczne Ziemi
- ma wpływ na działanie kompasu i nawigacji satelitarnej
- wysoka aktywność słoneczna może zakłócać systemy nawigacyjne
  - do lotów w trybie GPS niezbędne jest pozycjonowanie drona przez min. 4 satelity

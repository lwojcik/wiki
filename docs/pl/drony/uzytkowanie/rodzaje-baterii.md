# Rodzaje baterii

## Akumulator LiPo

- składa się z pojedynczych ogniw (cel) połączonych razem w paczce (baterii / pakiecie / akumulatorze)
- aktualne napięcie jest miarą naładowania pakietu
- napięcie znamionowe informuje o tym, jakie napięcie akumulator będzie utrzymywać przez większość czasu pracy
  - napięcie znamionowe wyraża też napięcie, przy którym akumulator może być bezpiecznie przechowywany
  - wynosi 3,7 V / ogniwo
    - w przypadku akumulatorów wysokiego napięcia 3,8V / ogniwo
- napięcie 3,2 - 3,3 V / ogniwo jest uważane za minimalny bezpieczny poziom rozładowania, gdy akumulator jest odłączony od zasilanego urządzenia
- napięcie 3,0 V / ogniwo jest uważane za minimalny bezpieczny poziom rozładowania gdy akumulator jest obciążony (czyli nadal zasila BSP)
- w pełni naładowane ogniwo nie powinno przekraczać 4,2 V / ogniwo
- ogniwa można łączyć szeregowo
  - łaczone ogniwa muszą mieć identyczne parametry i liczbę cykli ładowania i rozładowywania
  - ich napięcia są sumowane (ale nie sumuje się ich pojemność)
  - połączenie szeregowe jest oznaczone literą "S" na pakiecie LiPo
- ogniwa można łączyć równolegle
  - połączenie równoległe jest oznaczone literą "S" na pakiecie LiPo
  - sumują się ich pojemności, ale nie napiecie
- do ich ładowania należy stosować odpowiednie ładowarki\
- zalecanym trybem ładowania jest BALANCE - ładowanie z balansowaniem ogniw
- napęczniała bateria to oznaka:
  - głębokiego i długotrwałego rozładowania
  - pozostawienia w pełnym naładowaniu na długi czas
  - niewłaściwego ładowania lub rozładowywania
  - elektrolit przekształca się w stan gazowy
- akumulator rozładowany do zbyt niskiego poziomu może odmówić ładowania

## Akumulator niklowo-kadmowy NiCd

- napięcie znamionowe ogniwa: 1.2 V
- normalne ładowanie prądem 0.1C trwa ok. 14-16h
- napięcie na końcu ładowania: 1,45-1,5V
- przy ładowaniu prądem większym niż 0,2C konieczna kontrola ładowania
- akumulator niklowo-kadmowy posiada efekt pamięci (częściowo odwracalny)
- przegrzanie podczas ładowania przerywa proces do czasu obniżenia się temperatury akumulatora
  - należy używać tylko dedykowanych ładowarek
- przegrzanie skraca żywotność baterii
- prąd rozładowania nie powinien być większy niż 10C
- końcowe napięcie rozładowania: 1,0V
- samorozładowanie: 1% / dzień
- parametry ogniwa zależne od temperatury
- kadm jest pierwiastkiem szkodliwym

## Akumulator niklowo-wodorkowy NiMH

- większa pojemność od akumulatorów NiCd o tej samej wielkości
- napięcie znamionowe ogniwa: 1.2V
- normalne ładowanie z 0.1C prądu trwa ok. 14-16h
- napięcie na końcu ładowania: 1,45-1,5V
- przy ładowaniu prądem większym niż 0,2C konieczna kontrola ładowania
- szybkie ładowanie min. 1h
- efekt pamięci jest mniejszy niż w przypadku akumulatorów NiCd
- przegrzanie przy ładowaniu następuje powyżej 45°C
- przegrzanie skraca żywotność
- prąd rozładowania nie przekracza 3-5C
- końcowe napięcie rozładowania: 1,0V
- samorozładowanie: 1,5% / dzień
- parametry ogniwa zależne od temperatury
- bateria NiMH nie zawiera metali szkodliwych

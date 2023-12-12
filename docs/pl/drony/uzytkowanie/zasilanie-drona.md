# Zasilanie drona

## Pojemność baterii

- wyrażana w miliamperogodzinach (mAh)
  - lub amperogodzinach (Ah) dla akumulatorów o dużej pojemności
  - 10000 mAh = 10 Ah
  - 1000 mAh = 1 Ah
  - 100 mAh = 0,1 Ah
- bateria 10 Ah może zasilać urządzenia natężeniem prądu 10A przez maks. jedną godzinę
  - w przypadku prądu 5A - dwie godziny

## Napięcie

- jednostką napięcia jest wolt (V)
- wpływa na sprawność urządzenia
- silnik elektryczny jest w stanie wykonać określoną liczbę obrotów na minutę z każdego wolta
- gdy akumulator się rozładowuje, napięcie spada, a przy tym spada liczba obrotów silnika na minutę

## Natężenie prądu

- jednostką natężenia prądu jest amper (A)
- informuje o wielkości jego przeływu

## Efekt pamięci

- dotyczy akumulatorów NiCd i NiMH
- akumulator zmniejsza pojemność, gdy:
  - jest ładowany przed uprzednim rozładowaniem do minimalnego napięcia
  - nie jest ładowany do 100% pojemności
- należy te akumulatory rozładowywać do minimalnego dopuszczalnego napięcia i ładować do 100%
- akumulatory litowo-polimerowe (LiPo) nie mają efektu pamięci

## Sprawność prądowa, maksymalny współczynnik prądu ładowania

- obie wartości oznaczane jako "C"
- miara tego, jak szybko można naładować i rozładować akumulator w bezpieczny sposób i bez szkody dla akumulatora
- wartość określana przez producenta baterii
- przykład:
  - akumulator LiPo o pojemności 1500 mAh i rozładowaniu podanym w 40C ma wydajność prądową 60A
  - 1500 mAh = 1,5 Ah
  - 1,5 Ah * 40C = 60A
  - parametr ma znaczenie, gdy trzeba użyć maksymalnej mocy silnika
    - podzespoły mogą na to pozwolić, jeśli bateria ma możliwość oddania prądu o wystarczającym natężeniu
- jeżeli akumulator LiPo może być ładowany maksymalnie 3C:
  - bateria 1500 mAh (1,5 Ah) może być ładowana maksymalnym natężeniem prądu 4,5A
    - 1500 mAh = 1,5Ah
    - 1,5Ah * 3C = 4,5A
  - użycie prądu o wyższym natężeniu może doprowadzić do wybuchu akumulatora

# Grande Giro del Garda 2026

Sito statico e raccolta di tracce GPX per un itinerario a piedi di nove giorni
attorno al Lago di Garda, con partenza e ritorno a Desenzano del Garda dal
3 all'11 ottobre 2026.

Il progetto è pensato per essere consultato da smartphone durante il viaggio e
può essere pubblicato direttamente con GitHub Pages. Dopo la prima apertura
online, le pagine e le tracce principali restano disponibili anche senza
connessione.

## Itinerario

| Tappa | Data | Percorso | Lunghezza | D+ stimato | Tempo netto |
|---:|---|---|---:|---:|---:|
| 1 | 3 ottobre | Desenzano → Peschiera | 24,6 km | 50 m | 5 h |
| 2 | 4 ottobre | Peschiera → Torri del Benaco | 25,9 km | 150 m | 5 h 30 |
| 3 | 5 ottobre | Torri del Benaco → Malcesine | 25,5 km | 800 m | 6 h 30 |
| 4 | 6 ottobre | Malcesine → Riva del Garda | 25,8 km | 1.150 m | 7 h |
| 5 | 7 ottobre | Riva del Garda → Limone | 18,4 km | 1.150 m | 5 h 30 |
| 6 | 8 ottobre | Limone → Campione | 12,5 km | 550 m | 3 h 30 |
| 7 | 9 ottobre | Campione → Gargnano | 18,6 km | 950 m | 5 h 15 |
| 8 | 10 ottobre | Gargnano → Salò | 23,4 km | 750 m | 6 h |
| 9 | 11 ottobre | Salò → Desenzano | 26,9 km | 250 m | 5 h 45 |

Totale pianificato: **201,7 km** e circa **5.800 m di dislivello positivo**.
Tempi e dislivelli sono stime; soste, fondo, meteo e orientamento vanno aggiunti
al tempo netto.

## Contenuto del sito

La cartella pronta da pubblicare è `mappa_gpx_originali_da_desenzano`.

- `index.html`: home page del viaggio.
- `tracce_gpx.html`: mappa interattiva delle nove tracce GPX originali,
  rinumerate con partenza da Desenzano.
- `tappe.html`: programma giornaliero con lunghezza, dislivelli, tempi,
  contatti completi dei pernottamenti, meteo, piano B e rientri.
- `materiale.html`: checklist dello zaino da 40 litri e indicazioni per
  distribuire il materiale.
- `check_serale.html`: controlli da eseguire prima di ogni tappa.
- `servizi.html`: ricerche rapide per farmacie, alimentari, ristorazione e
  acqua.
- `01_...gpx`–`09_...gpx`: copie integre dei GPX originali nell'ordine di
  percorrenza.
- `leaflet.js` e `leaflet.css`: libreria cartografica inclusa localmente.
- `site.js`, `sw.js` e `manifest.webmanifest`: installazione e cache offline.
- `favicon.ico`, `apple-touch-icon.png`, `icon-192.png` e `icon-512.png`:
  icona del sito e della schermata Home su iPhone.
- `.nojekyll`: impedisce a GitHub Pages di elaborare il sito con Jekyll.

La mappa principale mostra le **tracce originali** del tour. Le distanze della
pagina delle tappe si riferiscono invece al percorso personalizzato con raccordi
alle strutture. I raccordi agli alberghi e la deviazione Crero–Pai non sono
inclusi nei nove GPX originali della mappa.

## Uso locale

È possibile aprire direttamente `index.html`. In questa modalità pagine, GPX e
sfondo neutro funzionano senza rete; OpenTopoMap e tutti i collegamenti esterni
richiedono una connessione.

Per provare anche il service worker offline, avviare un server HTTP nella
cartella pubblicabile, per esempio:

```bash
python -m http.server 8000
```

e aprire `http://localhost:8000`.

## Pubblicazione con GitHub Pages

1. Creare un repository GitHub.
2. Copiare **il contenuto** di `mappa_gpx_originali_da_desenzano` nella radice
   del repository.
3. Eseguire commit e push sul branch `main`.
4. In **Settings → Pages**, scegliere **Deploy from a branch**.
5. Selezionare il branch `main`, cartella `/ (root)`, quindi salvare.
6. Aprire una volta il sito con connessione per completare la cache offline.

Non servono compilazione, dipendenze o database.

## Salvataggio dei dati

Le checklist del materiale e del controllo serale utilizzano `localStorage`
del browser. I dati:

- rimangono sul dispositivo;
- non vengono inviati a un server;
- non sono sincronizzati tra telefoni o browser;
- vengono persi cancellando i dati del sito.

Per contatti ICE, dati sanitari e conferme di prenotazione è consigliabile
conservare una copia privata offline, separata dal sito pubblico.

## Avvisi e limiti

Il Comune di Torri del Benaco ha disposto la chiusura del sentiero e del ponte
tibetano in località Crero dal **15 settembre al 14 dicembre 2026**. La
deviazione ipotizzata sui sentieri 39 e 38 è basata sulla cartografia, ma non è
una deviazione ufficiale e non è stata verificata sul terreno.

Prima di ogni tappa occorre controllare:

- previsioni e allerte meteorologiche;
- nuove ordinanze e condizioni dei sentieri;
- orari di bus e battelli della data esatta;
- check-in della struttura successiva;
- acqua, punti di rifornimento e ora del tramonto.

Gli orari della Navigazione Laghi passano dall'orario estivo a quello invernale
il **5 ottobre 2026**. Fontanelle, aperture commerciali e vie di fuga non sono
presentate come informazioni garantite.

Le tracce e le pagine del progetto sono strumenti di pianificazione e non
sostituiscono segnaletica, cartografia escursionistica aggiornata, indicazioni
degli enti gestori o valutazione delle condizioni sul posto.

## Fonti principali

- [Grande Giro del Garda – Trekking Etc.](https://www.trekking-etc.it/etc/trekking/it/trekking/grande-giro-del-garda/generale/tour)
- [Ordinanza Crero – Comune di Torri del Benaco](https://comune.torridelbenaco.vr.it/it/news/ordinanza-chiusura-sentiero-e-ponte-tibetano-loc-crero)
- [Navigazione Laghi – orari Lago di Garda](https://www.navigazionelaghi.it/biglietti-e-orari-lago-di-garda/)
- [ATV Verona – orari extraurbani](https://tech.atv.verona.it/atv_www/orari_extraurb/orari/atv_localita_G.html)
- [Arriva Brescia – orari invernali 2026/27](https://brescia.arriva.it/orari-invernali-2026-27/)
- [Trentino Trasporti – Alto Garda](https://www.trentinotrasporti.it/it/viaggia-con-noi/urbano/alto-garda)
- [Leaflet](https://leafletjs.com/) e [OpenTopoMap](https://opentopomap.org/)

Le informazioni operative sono state ricontrollate il **30 settembre 2026**.

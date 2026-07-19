import { Column, Flex, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";

export async function generateMetadata() {
  return {
    title: "Privacy Policy — QuickStore",
    description:
      "Privacy policy for the QuickStore Android application by Luca Calvetti.",
    openGraph: {
      title: "Privacy Policy — QuickStore",
      description:
        "Privacy policy for the QuickStore Android application by Luca Calvetti.",
      type: "website",
      url: `https://${baseURL}/work/quickstore/privacy-policy`,
    },
  };
}

export default function PrivacyPolicy() {
  return (
    <Column maxWidth="s" gap="l" paddingY="xl">
      {/* Header */}
      <Column gap="4">
        <Heading variant="display-strong-s">Privacy Policy</Heading>
        <Text variant="heading-default-xs" onBackground="neutral-weak">
          QuickStore
        </Text>
      </Column>

      <Text variant="body-default-s" onBackground="neutral-weak">
        Ultimo aggiornamento: Luglio 2026 · Versione app: 1.5.2
      </Text>

      {/* Summary highlight */}
      <Flex
        border="brand-alpha-medium"
        background="brand-alpha-weak"
        radius="m"
        padding="20"
        direction="column"
        gap="8"
      >
        <Text variant="label-strong-s" onBackground="brand-medium">
          IN SINTESI
        </Text>
        <Text variant="body-default-m">
          QuickStore funziona interamente offline, senza account, per impostazione predefinita:
          i dati di magazzino restano solo sul dispositivo. Solo se attivi volontariamente la
          sincronizzazione facoltativa, i dati vengono trasmessi al server che tu stesso configuri
          — non un servizio gestito dallo sviluppatore o da terzi. Nessun dato viene mai venduto
          o condiviso con terze parti, nessun tracciamento pubblicitario o analitico.
        </Text>
      </Flex>

      {/* Section 1 */}
      <Column gap="8">
        <Heading as="h2" variant="heading-strong-l">
          1. Informazioni generali
        </Heading>
        <Text variant="body-default-m">
          QuickStore è un'applicazione per la gestione di magazzino con riconoscimento articoli
          tramite fotocamera, pensata per tecnici e piccole realtà che gestiscono ricambi e
          materiali su uno o più magazzini/ubicazioni.
          Lo sviluppatore è Luca Calvetti (
          <a href="mailto:calvuzs3@gmail.com">calvuzs3@gmail.com</a>).
        </Text>
      </Column>

      {/* Section 2 */}
      <Column gap="8">
        <Heading as="h2" variant="heading-strong-l">
          2. Dati raccolti
        </Heading>
        <Text variant="body-default-m">
          QuickStore raccoglie e memorizza sul dispositivo i dati che inserisci direttamente
          nell'app, per farla funzionare:
        </Text>
        <Column as="ul" gap="4" paddingLeft="16">
          <Text as="li" variant="body-default-m">
            Dati degli articoli: nome, descrizione, categoria, unità di misura, codici.
          </Text>
          <Text as="li" variant="body-default-m">
            Fotografie scattate per il riconoscimento visivo degli articoli.
          </Text>
          <Text as="li" variant="body-default-m">
            Movimenti di magazzino: carichi, scarichi, trasferimenti, quantità, date.
          </Text>
          <Text as="li" variant="body-default-m">
            Impostazioni e preferenze dell'app.
          </Text>
        </Column>
        <Text variant="body-default-m">
          Non viene richiesto alcun account per usare l'app, e non vengono raccolti dati
          analitici, pubblicitari o di tracciamento di alcun tipo.
        </Text>
      </Column>

      {/* Section 3 */}
      <Column gap="8">
        <Heading as="h2" variant="heading-strong-l">
          3. Dove sono memorizzati i dati
        </Heading>
        <Text variant="body-default-m">
          Per impostazione predefinita, tutti i dati restano esclusivamente sul dispositivo,
          nel database interno dell'app (Room/SQLite). Nessun dato viene trasmesso finché non
          attivi volontariamente la sincronizzazione facoltativa (Impostazioni → Account).
        </Text>
      </Column>

      {/* Section 4 */}
      <Column gap="8">
        <Heading as="h2" variant="heading-strong-l">
          4. Sincronizzazione opzionale
        </Heading>
        <Text variant="body-default-m">
          QuickStore include una funzionalità di sincronizzazione tra più dispositivi{" "}
          <strong>opzionale e disattivata per impostazione predefinita</strong>. Se scegli di
          attivarla, configuri tu stesso l'indirizzo di un server QuickStore (Impostazioni →
          Server di sincronizzazione). In questo caso:
        </Text>
        <Column as="ul" gap="4" paddingLeft="16">
          <Text as="li" variant="body-default-m">
            I dati di magazzino e le foto vengono trasmessi esclusivamente al server che hai
            specificato tu.
          </Text>
          <Text as="li" variant="body-default-m">
            L'accesso richiede email e password verso quel server; il token di sessione è
            conservato in locale in forma cifrata (Android Keystore).
          </Text>
          <Text as="li" variant="body-default-m">
            Lo sviluppatore non ha accesso a nessun server configurato dagli utenti e non
            riceve alcun dato sincronizzato.
          </Text>
        </Column>
      </Column>

      {/* Section 5 */}
      <Column gap="8">
        <Heading as="h2" variant="heading-strong-l">
          5. Permessi richiesti
        </Heading>
        <Column as="ul" gap="4" paddingLeft="16">
          <Text as="li" variant="body-default-m">
            <strong>Fotocamera</strong> — per scattare foto degli articoli e per il
            riconoscimento visivo. Le foto restano sul dispositivo finché non attivi la
            sincronizzazione.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Notifiche e servizio in primo piano</strong> — per mostrare l'avanzamento
            durante il trasferimento delle foto in sincronizzazione (solo se attivata).
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Rete</strong> — utilizzata solo se la sincronizzazione remota è attivata
            dall'utente.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Archiviazione</strong> — per salvare le foto e per esportare i dati
            (backup, Excel, CSV).
          </Text>
        </Column>
      </Column>

      {/* Section 6 */}
      <Column gap="8">
        <Heading as="h2" variant="heading-strong-l">
          6. Condivisione dei dati
        </Heading>
        <Text variant="body-default-m">
          QuickStore non condivide alcun dato con terze parti e non integra servizi di analisi,
          pubblicità o tracciamento. I dati possono essere esportati dall'utente (Excel, CSV o
          come backup) per uso personale: l'utente è responsabile della gestione di quei file.
        </Text>
      </Column>

      {/* Section 7 */}
      <Column gap="8">
        <Heading as="h2" variant="heading-strong-l">
          7. Conservazione e cancellazione dei dati
        </Heading>
        <Text variant="body-default-m">
          Tutti i dati sono sotto il controllo esclusivo dell'utente. È possibile eliminare
          tutti i dati dell'app in qualsiasi momento tramite le impostazioni di sistema Android
          (<em>Impostazioni → App → QuickStore → Cancella dati</em>) oppure disinstallando
          l'applicazione. Se hai sincronizzato dati verso un tuo server, la loro cancellazione
          lato server dipende da come gestisci quell'istanza.
        </Text>
      </Column>

      {/* Section 8 */}
      <Column gap="8">
        <Heading as="h2" variant="heading-strong-l">
          8. Modifiche a questa policy
        </Heading>
        <Text variant="body-default-m">
          Eventuali aggiornamenti a questa pagina saranno pubblicati su questo URL. La data di
          "Ultimo aggiornamento" in cima alla pagina verrà modificata di conseguenza.
        </Text>
      </Column>

      {/* Section 9 */}
      <Column gap="8">
        <Heading as="h2" variant="heading-strong-l">
          9. Contatti
        </Heading>
        <Text variant="body-default-m">
          Per qualsiasi domanda relativa alla privacy:{" "}
          <a href="mailto:calvuzs3@gmail.com">calvuzs3@gmail.com</a>
        </Text>
      </Column>

      <Text variant="body-default-s" onBackground="neutral-weak">
        © 2026 Luca Calvetti · QuickStore
      </Text>
    </Column>
  );
}

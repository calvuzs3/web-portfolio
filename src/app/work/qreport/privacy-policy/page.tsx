import { Column, Flex, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";

export async function generateMetadata() {
  return {
    title: "Privacy Policy — Quick Report",
    description:
      "Privacy policy for the Quick Report Android application by Luca Calvetti.",
    openGraph: {
      title: "Privacy Policy — Quick Report",
      description:
        "Privacy policy for the Quick Report Android application by Luca Calvetti.",
      type: "website",
      url: `https://${baseURL}/work/qreport/privacy-policy`,
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
          Quick Report
        </Text>
      </Column>

      <Text variant="body-default-s" onBackground="neutral-weak">
        Ultimo aggiornamento: Luglio 2026 · Versione app: 1.0.0
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
          Quick Report non raccoglie, non trasmette e non vende alcun dato personale a terze parti.
          Tutti i dati inseriti nell'app rimangono sul dispositivo dell'utente o sul server
          scelto dall'utente stesso.
        </Text>
      </Flex>

      {/* Section 1 */}
      <Column gap="8">
        <Heading as="h2" variant="heading-strong-l">
          1. Informazioni generali
        </Heading>
        <Text variant="body-default-m">
          Quick Report è un'applicazione professionale per tecnici di campo, progettata per la
          gestione di report di ispezione su celle robotizzate e impianti industriali.
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
          Quick Report <strong>non raccoglie dati personali</strong>. Nello specifico:
        </Text>
        <Column as="ul" gap="4" paddingLeft="16">
          <Text as="li" variant="body-default-m">Non viene richiesto alcun account Google, Facebook o analogo.</Text>
          <Text as="li" variant="body-default-m">Non vengono inviati dati analitici o di utilizzo a server di terze parti.</Text>
          <Text as="li" variant="body-default-m">Non vengono utilizzati SDK pubblicitari o di tracciamento.</Text>
          <Text as="li" variant="body-default-m">Non vengono raccolti indirizzi IP o dati di localizzazione.</Text>
        </Column>
      </Column>

      {/* Section 3 */}
      <Column gap="8">
        <Heading as="h2" variant="heading-strong-l">
          3. Dati inseriti dall'utente
        </Heading>
        <Text variant="body-default-m">
          I dati tecnici inseriti nell'app (clienti, impianti, log di manutenzione, foto, documenti)
          sono creati e gestiti esclusivamente dall'utente. Questi dati:
        </Text>
        <Column as="ul" gap="4" paddingLeft="16">
          <Text as="li" variant="body-default-m">Vengono salvati localmente nel database interno del dispositivo (Room/SQLite).</Text>
          <Text as="li" variant="body-default-m">Non vengono trasmessi a nessun server senza esplicita configurazione da parte dell'utente.</Text>
        </Column>
      </Column>

      {/* Section 4 */}
      <Column gap="8">
        <Heading as="h2" variant="heading-strong-l">
          4. Sincronizzazione opzionale
        </Heading>
        <Text variant="body-default-m">
          Quick Report include una funzionalità di sincronizzazione remota{" "}
          <strong>opzionale e disattivata per impostazione predefinita</strong>.
          Se l'utente sceglie di attivarla, può configurare l'URL di un proprio server Ktor/PostgreSQL.
          In questo caso:
        </Text>
        <Column as="ul" gap="4" paddingLeft="16">
          <Text as="li" variant="body-default-m">I dati vengono trasmessi esclusivamente al server specificato dall'utente.</Text>
          <Text as="li" variant="body-default-m">
            Le credenziali di accesso al server sono conservate in locale in forma cifrata
            (<code>EncryptedSharedPreferences</code>).
          </Text>
          <Text as="li" variant="body-default-m">
            Lo sviluppatore non ha accesso a nessun server configurato dagli utenti e non riceve
            alcun dato sincronizzato.
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
            <strong>CAMERA</strong> — per scattare foto agli impianti. Le foto rimangono sul dispositivo.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>READ_EXTERNAL_STORAGE / READ_MEDIA_*</strong> — per allegare documenti esistenti ai report.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>INTERNET</strong> — utilizzato solo se la sincronizzazione remota è attivata dall'utente.
          </Text>
        </Column>
      </Column>

      {/* Section 6 */}
      <Column gap="8">
        <Heading as="h2" variant="heading-strong-l">
          6. Conservazione e cancellazione dei dati
        </Heading>
        <Text variant="body-default-m">
          Tutti i dati sono sotto il controllo esclusivo dell'utente. È possibile eliminare
          tutti i dati dell'app in qualsiasi momento tramite le impostazioni di sistema Android
          (<em>Impostazioni → App → Quick Report → Cancella dati</em>) oppure disinstallando l'applicazione.
        </Text>
      </Column>

      {/* Section 7 */}
      <Column gap="8">
        <Heading as="h2" variant="heading-strong-l">
          7. Minori
        </Heading>
        <Text variant="body-default-m">
          Quick Report è un'applicazione professionale destinata a tecnici adulti. Non è progettata
          né destinata a utenti di età inferiore ai 18 anni.
        </Text>
      </Column>

      {/* Section 8 */}
      <Column gap="8">
        <Heading as="h2" variant="heading-strong-l">
          8. Modifiche a questa policy
        </Heading>
        <Text variant="body-default-m">
          Eventuali aggiornamenti a questa pagina saranno pubblicati su questo URL.
          La data di "Ultimo aggiornamento" in cima alla pagina verrà modificata di conseguenza.
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
        © 2026 Luca Calvetti · Quick Report
      </Text>
    </Column>
  );
}

import React from "react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

const SupabaseClientContext = React.createContext<SupabaseClient | null>(null);

export function SupabaseProvider(props: { children: React.ReactNode }) {
  const [client] = React.useState(() => {
    return createClient( /* this lazily sets client on the initial load */ 
      process.env.SUPABASE_URL ?? "",
      process.env.SUPABASE_KEY ?? ""
    );
  });

  return (
    <SupabaseClientContext.Provider value={client}>
      {props.children}
    </SupabaseClientContext.Provider>
  );
}

export function useSupabaseClient(): SupabaseClient {
  const client = React.useContext(SupabaseClientContext);
  if (client === null) {
    throw new Error(
      "Supabase client not provided via context.\n" +
        "Did you forget to wrap your component tree with SupabaseProvider?"
    );
  }
  return client;
}
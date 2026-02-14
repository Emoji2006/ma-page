const supabaseUrl = "https://jepmvfzeywlondchknkv.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplcG12ZnpleXdsb25kY2hrbmt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwNjg4NTksImV4cCI6MjA4NjY0NDg1OX0.5kIUEE_U4jUo1EiSQp9bqjdN_TyDBjUS6Jeqt-aqB7o";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    nom: nom.value,
    prenom: prenom.value,
    email: email.value,
    telephone: telephone.value,
    message: message.value
  };

  const { error } = await supabase
    .from("contacts")
    .insert([data]);

  document.getElementById("status").innerText =
    error ? "Erreur ❌" : "Message envoyé ✅";

  if(!error) e.target.reset();
});

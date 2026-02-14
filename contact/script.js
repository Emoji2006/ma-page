const supabaseUrl = "https://jepmvfzeywlondchknkv.supabase.co";
const supabaseKey = "sb_publishable_G32BP1oe511VbzcLD1VvkA_iVEyFndT";
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

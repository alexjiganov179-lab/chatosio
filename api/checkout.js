export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }
  try {
    const { amount, email, first_name, last_name } = req.body;
    const txRef = 'osio-' + Date.now();
    // Prepare payload for Chapa API. Test keys are used for demonstration.
    const payload = {
      amount: amount,
      currency: 'ETB',
      email: email,
      first_name: first_name,
      last_name: last_name || '',
      tx_ref: txRef,
      callback_url: 'https://example.com/api/callback',
      return_url: 'https://example.com/thank-you',
      customization: {
        title: 'OSiO Laptop Purchase',
        description: 'Order from OSiO website'
      }
    };
    const secretKey = 'CHASECK_TEST-kaP4DViry3QymO314SozDS16v8WPX4sV';
    const response = await fetch('https://api.chapa.co/v1/transaction/initialize', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${secretKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
// sync_leads.js
// Script to push your ICP leads to the SendPilot campaign
const API_KEY = 'sp_live_7GvmLs4Ay1scRVj0oevYpMR2aKLIDZfoB86kEU7yAi8';

// TODO: Customize your ICP leads below
const CAMPAIGN_ID = 'cmn1w7xfr168c3g01lskqo2lc';

// Define your ICP leads here
const leads = [
  {
    firstName: "Jane",
    lastName: "Doe",
    companyName: "Acme Legal Services",
    linkedinUrl: "https://www.linkedin.com/in/janedoe-example"
  },
  {
    firstName: "John",
    lastName: "Smith",
    companyName: "Smith & Co Accounting",
    linkedinUrl: "https://www.linkedin.com/in/johnsmith-example"
  }
];

async function syncLeads() {
  for (const lead of leads) {
    try {
      const response = await fetch('https://api.sendpilot.ai/v1/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': API_KEY
        },
        body: JSON.stringify({
          campaignId: CAMPAIGN_ID,
          firstName: lead.firstName,
          lastName: lead.lastName,
          companyName: lead.companyName,
          linkedinProfileUrl: lead.linkedinUrl
        })
      });

      if (response.ok) {
        console.log(`Successfully added lead: ${lead.firstName} ${lead.lastName}`);
      } else {
        const errorText = await response.text();
        console.error(`Failed to add lead ${lead.firstName}: ${errorText}`);
      }
    } catch (error) {
      console.error(`Error syncing ${lead.firstName}:`, error);
    }
  }
}

syncLeads();

# CampMart — Smart Campus Marketplace Prototype

CampMart is a working static prototype for the **Smart Campus Marketplace & Resource Exchange** problem statement.

## What is included

- Enhanced landing page explaining the problem, solution, workflow and impact.
- Mock student login and campus verification flow.
- Marketplace with search, category filters, listing type filters and budget slider.
- Buy, sell, rent and exchange listings for books, gadgets, notes, essentials and lab tools.
- AI-style smart recommendation page with bundle suggestion.
- Price prediction / fair-price range on item details and post-item flow.
- Clickable listing details pages.
- Secure student chat prototype with quick replies.
- Safe meetup coordination modal.
- Seller dashboard with mock analytics and activity.
- Post new item wizard with live preview, mock photo upload and listing publish.
- Wishlist/saved items using browser localStorage.
- Dark mode toggle.
- Fully responsive UI.

## How to run

This is a dependency-free static prototype.

### Option 1: Open directly
Open `index.html` in any modern browser.

### Option 2: Run a local server
```bash
cd CampMart_Prototype
python -m http.server 8000
```
Then open:

```text
http://localhost:8000
```

## Suggested demo flow for judges

1. Start from the landing page and explain the student resource exchange problem.
2. Click **Mock Login** and verify a campus student.
3. Open **Marketplace**, search or filter listings.
4. Open any item details and explain AI fair-price prediction.
5. Click **Message verified seller** and show secure chat.
6. Use **Plan safe meetup** to show campus meetup coordination.
7. Open **AI Picks** to show smart recommendations.
8. Open **Sell/Rent** and publish a mock item.
9. Open **Dashboard** to show seller analytics.

## Notes

- This is a frontend prototype only. All data is mock data stored in browser localStorage.
- No backend, payment gateway or real authentication is connected.
- The uploaded design reference files are preserved inside `assets/design-reference/`.

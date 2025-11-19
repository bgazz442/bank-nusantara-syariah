# TODO: Update Navbar to Sampedia-Style Design

## Approved Plan
- Change navbar design to match Sampedia-style: centered, fixed top-6, rounded-full white background with shadow and border.
- Keep logo (image + text "BANK NUSANTARA SYARIAH") and menu texts unchanged.
- Menu: 4 main links (Beranda, Produk, Visi & Misi, Kontak) in horizontal layout, hidden on mobile.
- Replace "More" dropdown with a "More" button linking to "/more".
- Remove hamburger menu and mobile dropdown styles.
- Update CSS to match styles (e.g., separators, yellow hover effects).

## Steps to Complete
- [x] Step 1: Edit src/components/Header.js - Update structure to match Sampedia JSX, remove hamburger/dropdown logic, add menu array with current items, add More button.
- [x] Step 2: Edit src/components/Header.css - Update styles to match new layout (translate Tailwind classes to CSS), remove old hamburger/dropdown styles.
- [x] Step 3: Restore More dropdown with original submenus (Pengetahuan Umum Bank Syariah, etc.) instead of plain button.
- [x] Step 4: Add hamburger menu for mobile responsiveness to make design cooler.
- [x] Step 5: Raise navbar position slightly (from top-6 to top-3 equivalent).
- [x] Step 6: Enhance dropdown menu appearance with gradient background, arrow pointer, smooth animations, and left border highlight on hover.
- [ ] Step 7: Test the changes by running the app and checking the navbar appearance.

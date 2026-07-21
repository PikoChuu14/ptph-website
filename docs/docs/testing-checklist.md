# Website Testing Checklist

## Homepage

- [ ] Website loads without blank screen
- [ ] Logo appears correctly
- [ ] Website name appears correctly
- [ ] Hero title appears correctly
- [ ] Hero description appears correctly
- [ ] Hero background image/overlay looks readable
- [ ] Main buttons are visible

## Navbar

- [ ] Kenapa PTPH link scrolls to correct section
- [ ] Program link scrolls to correct section
- [ ] Daftar link scrolls to correct section
- [ ] Sertai Kami link scrolls to correct section
- [ ] Datang.my opens in new tab
- [ ] Navbar looks okay on desktop
- [ ] Navbar looks okay on mobile/tablet

## Service Carousel

- [ ] Carousel image appears
- [ ] Carousel auto slides
- [ ] Left arrow works
- [ ] Right arrow works
- [ ] Dots work
- [ ] Clicking poster opens lightbox
- [ ] Lightbox background dims
- [ ] Lightbox next/previous buttons work
- [ ] Lightbox closes with X
- [ ] Lightbox closes by clicking outside

## Why PTPH Section

- [ ] Section title loads from CMS content
- [ ] Cards show correctly
- [ ] Card images load
- [ ] Text is readable
- [ ] Layout is responsive

## Programmes Section

- [ ] Programme section title loads
- [ ] Programme cards appear
- [ ] Subjects appear as tags/pills
- [ ] Section does not break if subject list changes

## Registration Section

- [ ] Title and description load correctly
- [ ] Student registration button opens correct Google Form
- [ ] WhatsApp button opens correct WhatsApp number
- [ ] Note text appears
- [ ] Background/image does not reduce readability

## Join Our Team Section

- [ ] Title and paragraphs load correctly
- [ ] Opportunities list appears
- [ ] Application button opens correct Google Form
- [ ] Section looks good on desktop and mobile

## Footer

- [ ] Address appears correctly
- [ ] Phone number appears correctly
- [ ] Email appears correctly
- [ ] Google Map loads
- [ ] Footer layout works on mobile

## Google Forms

- [ ] Student registration form accepts response
- [ ] Job/internship form accepts response
- [ ] Responses appear in Google Sheets
- [ ] Forms are not restricted accidentally

## CMS

- [ ] `/admin/` opens
- [ ] Login works
- [ ] CMS sections show existing content
- [ ] Editing simple text works
- [ ] Editorial workflow works
- [ ] Published changes update JSON files
- [ ] Website still loads after CMS edit

## Deployment

- [ ] `npm run build` succeeds locally
- [ ] Netlify deploy succeeds
- [ ] `/content/*.json` files are accessible online
- [ ] Hard refresh shows latest content
- [ ] No console errors in browser

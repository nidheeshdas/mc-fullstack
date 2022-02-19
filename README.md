
# Links
1. https://strapi.io
2. https://nextjs.org
3. https://docs.strapi.io/developer-docs/latest/developer-resources/content-api/integrations/next-js.html#create-a-next-js-app


# Instructions

1. `mkdir next-js-strapi-faqs`
2. `mkdir frontend`
3. `cd frontend`
4. https://nextjs.org/docs/getting-started
5. `npx create-next-app@latest --typescript`
6. `cd ../`
7. `mkdir backend`
8. `cd backend`
9. `npx create-strapi-app@latest mc-fullstack-backend`
10. This will open browser. Enter your details. Next time, you need to run `npm run develop` to get Strapi running.
11. Once you login, 
12. Open Content-Type Builder from the left menu
13. Display name: FAQ, sa
14. Add text field, give name Title
15. Add another field, give name Body
16. Save
17. Once you create FAQ Content Type, click Content Manager on the left menu
18. Select FAQ under collection types
19. Click Create New Entry
20. Add few entries.
21. Make sure you publish the content.
22. Go to Settings > Roles > Public > Permissions > FAQ > Check "find" 
23. `cd ../frontend/mc-full-stack`
24. `npm i axios`
25. Open frontend/mc-full-stack/pages/index.tsx
26. Remove content inside `<main></main>`
27. Update it as per the code in git.
28. `npm run build`
29. `npm run dev`

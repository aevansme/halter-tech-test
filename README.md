# :bell: Halter Tech Test - Andrew Evans

Hi there! :wave: My name is Andy, and this is my Heat-Detection/Tech-Test submission for the frontend developer role with Halter :blush: 

### :iphone: Screenshots

![image](https://user-images.githubusercontent.com/17420406/223352469-25b8a67e-4bbd-4c8b-9376-cf2be477bd71.png)
![image](https://user-images.githubusercontent.com/17420406/223352553-95381af5-185a-4292-83da-7c0d47109329.png)

### :bulb: Points of interest

I assumed it might be worth directing you to some points-of-interest in the app which I would be looking for if I was reviewing this :blush:

- Evidence of [Unit Testing using Jest](https://github.com/aevansme/halter-tech-test/blob/main/utils/dateUtils.spec.ts), note how these functions are pure and easily testable. Examples of [Unit Testing using RTL](https://github.com/aevansme/halter-tech-test/blob/main/utils/dateUtils.spec.ts).
- [Maintable global style structure](https://github.com/aevansme/halter-tech-test/tree/main/assets/styles)
- [Application state using Context API](https://github.com/aevansme/halter-tech-test/blob/main/context/HeatResultsProvider.tsx)
- Other than that, I hope you enjoy reviewing this app. I've made plenty of assumptions whilst building this app, and would love to have a chance to discuss these with you.

### :bomb: List of future features I would like to develop

- Routing - As we add more pages to the app
- Absolute imports - Particularly for common imports. ie. "@assets/images/" rather than "../../../assets/images"
- Loading spinners - Whilst fetching from API
- Error handling and splash pages - Error Safely :)
- Memoization - Utils functions are all pure. Would be create to look into memoization for these for performance reasons

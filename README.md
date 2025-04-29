# 💰 Envelope Savings Calculator

<div align="center">
  <img src="public/envelope-banner.png" alt="Envelope Savings Calculator Banner" width="600">
  
  <p>A modern web application to calculate and visualize the envelope savings method.</p>

<a href="https://github.com/yourusername/money-saver/issues/new?assignees=&labels=bug&template=bug_report.md&title=">Report Bug</a>
·
<a href="https://github.com/yourusername/money-saver/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=">Request Feature</a>

</div>

## ✨ Live Demo

<div align="center">
  <a href="https://money-saver-envelope-calculator.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/LIVE%20DEMO-Visit%20App-blue?style=for-the-badge&logo=vercel" alt="Live Demo Button" height="40" />
  </a>
</div>

<p align="center">
  Try the application live and calculate your envelope savings plan!
</p>

## 📋 About The Project

The Envelope Savings Calculator helps you implement the popular envelope savings challenge method. This simple yet effective approach to saving money works by putting money in numbered envelopes each day, with the amount matching the day number.

The calculator determines exactly how many envelopes you need to reach your savings goal, taking the mathematical calculation out of the equation.

### 🌟 Features

- **Smart Calculation**: Automatically calculates the number of envelopes needed based on your target savings amount
- **Visual Representation**: Displays a visualization of your envelope journey
- **Responsive Design**: Works beautifully on desktop and mobile devices
- **Dark Mode Support**: Comfortable viewing in any lighting condition
- **Detailed Explanations**: Built-in guide to help understand the savings method

## 🚀 Getting Started

Follow these simple steps to get a local copy up and running.

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository

   ```sh
   git clone https://github.com/Marwan1241/money-saver.git
   ```

2. Navigate to the project directory

   ```sh
   cd money-saver
   ```

3. Install dependencies

   ```sh
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. Start the development server

   ```sh
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React](https://reactjs.org/) - UI components

## 📘 How the Envelope Savings Method Works

1. **Calculate Your Envelope Count**: Use the calculator to determine how many envelopes you need based on your savings goal.
2. **Prepare Your Envelopes**: Create physical or virtual envelopes numbered from 1 to your calculated total.
3. **Daily Deposits**: Each day, add money to an envelope matching the envelope number (e.g., Day 5 = 5 EGP).
4. **Complete the Challenge**: By the time you fill your last envelope, you'll have reached your savings goal!

### 📊 The Math Behind It

The calculator uses the formula for the sum of an arithmetic series:

```
Total savings = n(n+1)/2
```

Where `n` is the number of envelopes. To solve for the number of envelopes needed given a target amount:

```
n = (-1 + √(1 + 8*target))/2
```

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📬 Contact

Your Name - [@yourusername](https://twitter.com/yourusername) - email@example.com

Project Link: [https://github.com/yourusername/money-saver](https://github.com/yourusername/money-saver)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vercel](https://vercel.com/) for hosting

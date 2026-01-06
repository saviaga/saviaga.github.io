# Claudia Flores-Saviaga

Personal academic website showcasing research publications, academic service, and professional information in Human-Centered AI and HCI.

🔗 **Live Site:** [https://saviaga.github.io](https://saviaga.github.io)

## About

This website features:
- Academic publications and research
- Professional background and education
- Contact information and social links

## Technology Stack

Built with:
- [Gatsby](https://www.gatsbyjs.com/) - React-based static site generator
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons) - Icon library

## Development

### Prerequisites

Install Node.js v18+ (using Homebrew on macOS):

```bash
brew install node@20
export PATH="/opt/homebrew/opt/node@20/bin:$PATH"
```

### Running Locally

Install dependencies:

```bash
npm install
```

Start development server at [http://localhost:8000](http://localhost:8000):

```bash
npm run develop
```

View GraphiQL IDE at [http://localhost:8000/___graphql](http://localhost:8000/___graphql)

### Building for Production

Build the production version:

```bash
npm run build
```

Test production build at [http://localhost:9000](http://localhost:9000):

```bash
npm run serve
```

### Code Quality

Run ESLint and TypeScript checking:

```bash
npm run lint
npm run type
```

Fix lint errors automatically:

```bash
npm run lint -- --fix
```

## Deployment

Deploy to GitHub Pages:

```bash
npm run deploy
```

This command will:
1. Build the production site
2. Push to the `public` branch
3. GitHub Pages will automatically serve the site

## Project Structure

```
src/
├── components/     # React components
├── constants/      # Site configuration
├── data/          # Profile, publications, projects data
├── images/        # Images and assets
├── pages/         # Page components (About, Publications, Contact)
├── posts/         # Blog posts (MDX format)
├── templates/     # Page templates
└── types/         # TypeScript type definitions
```

## License

0BSD

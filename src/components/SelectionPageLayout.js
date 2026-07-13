/**
 * The selection pages share the home page's layout primitives.
 * This module used to be a near-duplicate of PageLayout; it now
 * simply re-exports the shared pieces.
 */
export {
  HomePageLayout as default,
  Introduction,
  Hero,
  Tagline,
  SecondaryTagline,
  PageTitle,
  Paragraph,
  PrimaryButton,
  SecondaryButton,
  Logo,
} from './PageLayout'

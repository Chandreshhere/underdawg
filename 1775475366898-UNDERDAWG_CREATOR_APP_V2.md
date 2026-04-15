# Underdawg Creator/Artist App — Complete Product Specification

> **Underdawg** — The operating system for the creator economy. Get Discovered. Get Connected. Get Paid.

> This document defines every feature, screen, workflow, and interaction for the Creator/Artist surface of the Underdawg mobile and web application. Every section maps to a real user need in a creator's career journey.

---

## Table of Contents

1. [How Underdawg Works — The Creator Perspective](#1-how-underdawg-works)
2. [System Architecture — Creator Surface](#2-system-architecture)
3. [Creator Journey & Lifecycle](#3-creator-journey--lifecycle)
4. [Module 1 — Onboarding & Identity](#4-module-1--onboarding--identity)
5. [Module 2 — Profile & Portfolio](#5-module-2--profile--portfolio)
6. [Module 3 — Content Studio](#6-module-3--content-studio)
7. [Module 4 — Feed & Discovery](#7-module-4--feed--discovery)
8. [Module 5 — Audience Ownership](#8-module-5--audience-ownership)
9. [Module 6 — Analytics & Intelligence](#9-module-6--analytics--intelligence)
10. [Module 7 — Job Board & Brand Deals](#10-module-7--job-board--brand-deals)
11. [Module 8 — Merchandise Studio](#11-module-8--merchandise-studio)
12. [Module 9 — Art Marketplace](#12-module-9--art-marketplace)
13. [Module 10 — Financial Dashboard](#13-module-10--financial-dashboard)
14. [Module 11 — Collaboration Hub](#14-module-11--collaboration-hub)
15. [Module 12 — Reputation & Verification](#15-module-12--reputation--verification)
16. [Module 13 — Community & Engagement](#16-module-13--community--engagement)
17. [Module 14 — Learning & Growth](#17-module-14--learning--growth)
18. [Module 15 — Settings & Preferences](#18-module-15--settings--preferences)
19. [Screen Inventory](#19-screen-inventory)
20. [Epics & User Stories](#20-epics--user-stories)
21. [API Architecture](#21-api-architecture)
22. [Non-Functional Requirements](#22-non-functional-requirements)

---

## 1. How Underdawg Works

### 1.1 What Underdawg Is (And Is Not)

**Underdawg is NOT just another social media platform.** It is a pipeline that turns unknown talent into monetizable assets — and sits in the middle of that transformation.

> **This is not a content app. This is a system that discovers, amplifies, monetizes, and manages the next generation of creators — before they become mainstream.**

#### What Underdawg Is NOT

| NOT This | Why Not |
|----------|---------|
| Just a social platform | Social is a feature, not the business |
| Just a marketplace | Transactions are one revenue stream of many |
| Just a talent agency | Management is Layer 4, not the whole system |
| Just a portfolio site | Portfolio is the entry point, not the product |
| Just an influencer platform | We focus on EARLY creators, not established influencers |

#### What Underdawg IS

Underdawg combines:

| Like This | We Provide |
|-----------|------------|
| **Instagram** | Content sharing, audience building, discovery |
| **LinkedIn** | Professional identity, portfolio, opportunities |
| **Upwork** | Job marketplace, brand deal connections |
| **Shopify** | Merchandise stores, e-commerce |
| **CAA/WME** | Talent management, career development |

**All in one platform. Built for emerging creators. Optimized for GROWTH OVER POPULARITY.**

---

### 1.2 The Core Insight

Every creator goes through predictable stages:

```
UNKNOWN  →  EMERGING  →  GROWING  →  ESTABLISHED
```

| Platform | When They Monetize | Problem |
|----------|-------------------|---------|
| Instagram | After millions of followers | Too late, creator already expensive |
| YouTube | After 1K subs + 4K watch hours | Years of unpaid work first |
| TikTok | After virality (random) | No predictability, no ownership |
| Spotify | After millions of streams | Pays pennies, no direct relationship |
| Talent Agencies | After you are already famous | Take creators others discovered |

> **💡 KEY INSIGHT:** All existing platforms monetize creators AFTER they are already valuable. Underdawg monetizes creators BEFORE they become expensive. We capture value during the transformation from unknown to established — not after it.

This is not just a timing difference. It is a fundamentally different business:
- We build relationships when creators NEED us, not when they are being courted by everyone
- We earn loyalty because we believed in them early
- We capture multiple revenue streams across their entire journey
- We become essential infrastructure, not optional tools

---

### 1.3 The Key Differentiator

Underdawg stands apart by being fully **artist-centric**. While existing solutions focus on isolated needs:

- **Instagram:** Showcasing work (but no monetization for small creators)
- **Upwork:** Freelancing (but no community, no growth)
- **LinkedIn:** Networking (but not built for creators)

Underdawg integrates ALL THREE into one seamless experience designed specifically for emerging artists.

> **💡 GROWTH OVER POPULARITY:** Instead of favoring already-established creators, the platform is built to identify, nurture, and promote underrated talent — giving equal visibility and opportunity to those who need it most.

At its core, Underdawg is not just helping artists get seen — **it is helping them get DISCOVERED, get CONNECTED, and get PAID — all in one place.**

---

### 1.4 The Creator's Problem Today

```
FRAGMENTATION (The daily chaos)
├── Content on Instagram, YouTube, TikTok, Spotify — none talk to each other
├── Analytics spread across 6 different dashboards
├── Brand deals negotiated via DMs, emails, WhatsApp — no system
├── Payments from 10 sources, no unified view
├── Audience belongs to platforms, not the creator
└── One algorithm change = career crisis

INVISIBILITY (The discovery problem)
├── New creators can't break through
├── Talent doesn't equal visibility
├── Algorithm rewards popularity, not potential
├── No way to showcase full portfolio across mediums
├── Brands can't find the right creators
└── Managers can't discover emerging talent

EXPLOITATION (The money problem)
├── No pricing transparency for brand deals
├── Smaller creators systematically underpaid
├── Platforms take 30-50% of earnings
├── No financial products for irregular income
├── No credit system recognizes audience value
└── Tax filing is a nightmare

AUTHENTICITY (The coming crisis)
├── AI content flooding the internet
├── Fake followers, fake engagement everywhere
├── Brands can't verify real influence
├── Audiences can't trust what's real
└── Human creators need proof of authenticity
```

---

### 1.5 The Underdawg Solution — The 4-Layer System

Underdawg is built as 4 connected layers, each feeding into the next:

#### Layer 1: Discovery & Community

The entry point and data engine.

| What It Does | Details |
|--------------|---------|
| **Attracts** | Artists, Musicians, Designers, Creators of all types |
| **Gives** | Visibility, Community, Early recognition, Public portfolio link |
| **Tracks** | Engagement quality, Consistency, Growth potential |
| **Creates** | Talent funnel, Data engine, Reputation system |

Key features:
- Public portfolio link (underdawg.com/username) — like LinkedIn for creators
- Algorithm rewards POTENTIAL, not existing popularity
- Reputation score that cannot be transferred elsewhere
- Community and collaboration features for growth

> This layer is the **data engine + talent funnel**. It identifies who is rising before the market does.

#### Layer 2: Monetization (Immediate Income)

Creators start earning early — not after years of unpaid work.

| Revenue Stream | Description |
|----------------|-------------|
| **Merchandise** | AI-powered design, production handled, in-app store + standalone e-commerce site |
| **Art Marketplace** | Sell original artwork, prints, digital downloads, commissions |
| **Brand Deals** | Job board with transparent pricing, contracts, payments |
| **Subscriptions** | Premium features, analytics, visibility boosts |
| **Tips** | Direct fan support |

> This layer ensures creators **do not wait years to earn**. Monetization happens alongside growth, not after it.

#### Layer 3: Amplification Engine ("Get Viral")

Coordinated creator amplification — this is where Underdawg becomes POWERFUL.

| What It Is | What It Is NOT |
|------------|----------------|
| Coordinated creator amplification | NOT fake engagement |
| Multiple creators promoting simultaneously | NOT paid spam |
| Engineered momentum, not isolated posts | NOT bot activity |
| Turns content into trends | NOT manipulation |

Key rules:
- Invite-only — heavily curated creators
- High-priced — premium positioning (₹75K - ₹20L+ per campaign)
- Fully disclosed — mandatory #ad/#paidcollab
- Carefully curated — only quality brands and campaigns

> This is **influencer marketing + PR + distribution combined**. It becomes a core B2B revenue engine.

#### Layer 4: Artist Management (The Biggest Lever)

Underdawg selectively manages top creators (top 1-5% of platform).

We handle:
- Brand deal negotiation and pricing
- Collaboration strategy
- Merchandise strategy
- Career direction and positioning
- Event opportunities

**Revenue: 15-25% of creator earnings**

| What We Control | Why It Matters |
|-----------------|----------------|
| Talent supply | We discovered them, we know them best |
| Pricing power | We set market rates, not brands |
| Long-term revenue | Compounding income as creators grow |
| Career trajectory | We shape where they go |

> This is how talent agencies and labels become powerful. They control the supply. By managing careers we discovered, we **capture long-term compounding revenue**.

---

### 1.6 The Creator Flow on Underdawg

```
PHASE 1: ESTABLISH IDENTITY
├── Create account, select creator type
├── Build portfolio (upload best work)
├── Connect external platforms
├── Set niche, skills, interests
└── Get initial reputation score

PHASE 2: CREATE & SHARE
├── Upload content (images, videos, audio, text)
├── Cross-post to connected platforms
├── Engage with community
├── Participate in challenges
└── Build follower base

PHASE 3: GROW AUDIENCE
├── Track analytics across all platforms
├── Get AI-powered content insights
├── Identify top fans for migration
├── Build owned email/SMS list
└── Increase reputation score

PHASE 4: MONETIZE
├── Apply to brand deals from job board
├── Create and sell merchandise (in-app + standalone store)
├── List art in marketplace
├── Accept tips and subscriptions
├── Access financial products
└── Track all earnings in one place

PHASE 5: SCALE CAREER
├── Get verified creator badge
├── Participate in Get Viral campaigns
├── Attract manager representation
├── Access premium opportunities
├── Build lasting creator business
└── Own your entire career
```

---

## 2. System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                    UNDERDAWG CREATOR APP                             │
├──────────────────────────┬──────────────────────────────────────────┤
│    IDENTITY & PRESENCE   │    CONTENT & CREATION                    │
│    ├── Onboarding        │    ├── Content Studio                    │
│    ├── Profile Builder   │    ├── Media Library                     │
│    ├── Portfolio         │    ├── Scheduling & Publishing           │
│    └── Verification      │    └── Cross-Platform Posting            │
├──────────────────────────┼──────────────────────────────────────────┤
│    DISCOVERY & SOCIAL    │    AUDIENCE & INTELLIGENCE               │
│    ├── Home Feed         │    ├── Audience Ownership Tools          │
│    ├── Explore & Search  │    ├── Platform Connections              │
│    ├── Community         │    ├── Analytics Dashboard               │
│    ├── Challenges        │    └── AI Insights & Recommendations     │
│    └── Notifications     │                                          │
├──────────────────────────┼──────────────────────────────────────────┤
│    MONETIZATION          │    COMMERCE                              │
│    ├── Job Board         │    ├── Merchandise Studio                │
│    ├── Deal Management   │    ├── E-commerce Site Generator         │
│    ├── Brand Proposals   │    ├── Art Marketplace                   │
│    ├── Get Viral         │    ├── Order Management                  │
│    └── Contract Vault    │    └── Shipping & Fulfillment            │
├──────────────────────────┼──────────────────────────────────────────┤
│    FINANCIALS            │    COLLABORATION                         │
│    ├── Earnings Dashboard│    ├── Messaging & DMs                   │
│    ├── Payout Management │    ├── Collab Requests                   │
│    ├── Tax Center        │    ├── Team Management                   │
│    └── Financial Products│    └── Manager Connection                │
├──────────────────────────┴──────────────────────────────────────────┤
│    PLATFORM: Settings, Learning, Support, Reputation               │
└─────────────────────────────────────────────────────────────────────┘
         ↕ REST/GraphQL + WebSocket ↕
┌─────────────────────────────────────────────────────────────────────┐
│                    UNDERDAWG BACKEND                                 │
│    User Service │ Content Service │ Analytics │ Payments │ AI       │
└─────────────────────────────────────────────────────────────────────┘
         ↕ APIs ↕
┌─────────────────────────────────────────────────────────────────────┐
│              EXTERNAL PLATFORMS                                      │
│    Instagram │ YouTube │ TikTok │ Spotify │ Twitter │ Twitch        │
└─────────────────────────────────────────────────────────────────────┘
```

### Platform Distribution

| Platform | Primary Use | Priority |
|----------|-------------|----------|
| **iOS App** | Full creator experience, content upload, notifications | P0 |
| **Android App** | Full creator experience, content upload, notifications | P0 |
| **Web App** | Portfolio building, deep analytics, merchandise setup, deal management | P0 |
| **Web Profile** | Public-facing portfolio page (underdawg.com/username) | P0 |
| **Creator E-commerce Site** | Auto-generated standalone merchandise store | P0 |

---

## 3. Creator Journey & Lifecycle

### 3.1 Creator Tiers

| Tier | Criteria | Benefits |
|------|----------|----------|
| **Emerging** | 0-1K followers on Underdawg | Basic features, community access |
| **Rising** | 1K-10K followers OR 70+ reputation | Analytics, basic monetization |
| **Established** | 10K-100K followers OR 80+ reputation | Full monetization, brand deals |
| **Pro** | 100K-1M followers OR 90+ reputation | Priority deals, manager matching |
| **Elite** | 1M+ followers OR 95+ reputation | Premium everything, revenue advances |

### 3.2 Stage-Based Revenue Model

> **💡 KEY INSIGHT:** Same creator = multiple revenue streams across their journey. This is compounding value capture that no point solution can match.

| Creator Stage | Tier | Primary Revenue for Underdawg | Description |
|---------------|------|-------------------------------|-------------|
| **Early** | Emerging | Subscriptions | Premium features, analytics, visibility |
| **Growing** | Rising | Merchandise | Selling identity to early fans |
| **Scaling** | Established | Brand Deals + Get Viral | Participating in paid opportunities and amplification |
| **Professional** | Pro/Elite | Management Fees | 15-25% of creator earnings |

This progression ensures Underdawg captures value at EVERY stage of a creator's growth, not just at the end.

### 3.3 Creator Types

| Type | Description | Content Focus |
|------|-------------|---------------|
| **Visual Artist** | Painters, illustrators, digital artists, photographers | Images, prints, NFTs |
| **Musician** | Singers, producers, instrumentalists, DJs | Audio, videos, lyrics |
| **Video Creator** | YouTubers, filmmakers, vloggers, short-form creators | Videos, reels, shorts |
| **Writer** | Authors, poets, bloggers, journalists | Text, articles, ebooks |
| **Performer** | Dancers, actors, comedians, magicians | Videos, performances |
| **Educator** | Teachers, coaches, experts | Courses, tutorials |
| **Podcaster** | Audio/video podcasters, interviewers | Episodes, clips |
| **Streamer** | Gamers, live streamers, IRL streamers | Live content, clips |
| **Fashion/Lifestyle** | Fashion, beauty, fitness, food creators | Photos, videos, looks |
| **Multi-Creator** | Multiple content types | Mixed portfolio |

### 3.4 Creator Lifecycle States

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  ONBOARDING  │ ──► │    ACTIVE    │ ──► │   VERIFIED   │
│   (Setup)    │     │  (Creating)  │     │  (Trusted)   │
└──────────────┘     └──────────────┘     └──────────────┘
                            │                     │
                            ▼                     ▼
                     ┌──────────────┐     ┌──────────────┐
                     │   DORMANT    │     │   MANAGED    │
                     │ (30d inactive)│     │(Has manager) │
                     └──────────────┘     └──────────────┘
                            │
                            ▼
                     ┌──────────────┐
                     │  SUSPENDED   │
                     │(Policy issue)│
                     └──────────────┘
```

---

## 4. Module 1 — Onboarding & Identity

### 4.1 Purpose
Get creators into the platform with minimal friction while capturing enough data to personalize their experience and build their creator identity.

### 4.2 Screens

| Screen | Description | Key Actions |
|--------|-------------|-------------|
| **Splash** | App launch, brand introduction | Auto-proceed |
| **Welcome Carousel** | 3-4 slides explaining value prop | Swipe, Skip, Get Started |
| **Sign Up Method** | Choose auth method | Email, Google, Apple, Phone |
| **Email Sign Up** | Email + password entry | Enter, Validate, Submit |
| **Phone Sign Up** | Phone number + OTP | Enter, Request OTP, Verify |
| **OTP Verification** | Enter OTP code | Enter, Resend, Verify |
| **User Type Selection** | Creator / Brand / Manager / Fan | Select one |
| **Creator Type Selection** | Visual Artist, Musician, etc. | Select one or multiple |
| **Name & Username** | Display name + unique handle | Enter, Check availability |
| **Profile Photo** | Upload or take photo | Upload, Camera, Skip |
| **Bio Setup** | Short description | Enter, AI suggestions |
| **Niche Selection** | Primary and secondary niches | Select from tags |
| **Skills Selection** | What can you do? | Select from tags |
| **Platform Connection** | Connect Instagram, YouTube, etc. | OAuth connect |
| **Interests Selection** | What content do you enjoy? | Select tags |
| **Location** | City/Country (optional) | Enter, Auto-detect, Skip |
| **Notification Permissions** | Push notification access | Allow, Skip |
| **Onboarding Complete** | Success, next steps | Go to Home |

### 4.3 Sign Up Methods

| Method | Flow | Data Captured |
|--------|------|---------------|
| **Email** | Enter email → Enter password → Verify email | Email, Password |
| **Google** | OAuth → Auto-populate name, email, photo | Google ID, Email, Name, Photo |
| **Apple** | Sign in with Apple → Option to hide email | Apple ID, Name, (Email optional) |
| **Phone** | Enter phone → OTP → Verify | Phone number |

### 4.4 Onboarding Data Points

| Field | Required | Type | Validation |
|-------|----------|------|------------|
| Email/Phone | Yes | String | Valid format |
| Password | If email | String | Min 8 chars, 1 number, 1 special |
| User Type | Yes | Enum | Creator/Brand/Manager/Fan |
| Creator Type | Yes if Creator | Multi-select | At least 1 |
| Display Name | Yes | String | 2-50 chars |
| Username | Yes | String | 3-30 chars, unique, alphanumeric + underscore |
| Profile Photo | No | Image | Max 5MB, square crop |
| Bio | No | String | Max 300 chars |
| Niche | Yes | Multi-select | At least 1, max 5 |
| Skills | No | Multi-select | Max 10 |
| Location | No | String | City, Country |

### 4.5 Platform Connection (OAuth)

| Platform | Data Pulled | Permissions Needed |
|----------|-------------|-------------------|
| **Instagram** | Follower count, Recent posts, Engagement | Basic, Insights |
| **YouTube** | Subscriber count, Videos, Views, Analytics | Readonly |
| **TikTok** | Follower count, Videos, Engagement | Basic |
| **Twitter/X** | Follower count, Tweets, Engagement | Readonly |
| **Spotify** | Monthly listeners, Tracks, Playlists | Readonly |
| **Twitch** | Followers, Stream history, Subs | Readonly |
| **LinkedIn** | Connections, Experience (for educators) | Basic |
| **SoundCloud** | Followers, Tracks, Plays | Readonly |

### 4.6 Onboarding Completion Criteria

| Criteria | Required |
|----------|----------|
| Account created | Yes |
| User type selected | Yes |
| Creator type selected | Yes |
| Name & username set | Yes |
| At least 1 niche selected | Yes |
| Profile photo uploaded | No |
| Bio written | No |
| At least 1 platform connected | No |
| Notification permissions | No |

### 4.7 Post-Onboarding Nudges

| Day | Nudge | Trigger |
|-----|-------|---------|
| Day 0 | "Complete your profile for better discovery" | Profile < 50% complete |
| Day 1 | "Upload your first content" | 0 content uploaded |
| Day 2 | "Connect your Instagram to import followers" | 0 platforms connected |
| Day 3 | "Join a challenge to get discovered" | No challenge participation |
| Day 5 | "Check out creators in your niche" | Low explore activity |
| Day 7 | "Your weekly insights are ready" | Has any activity |

---

## 5. Module 2 — Profile & Portfolio

### 5.1 Purpose
Create a professional, comprehensive creator identity that serves as both a social profile and a portfolio/resume for opportunities. Every creator gets a **public portfolio link (underdawg.com/username)** — like LinkedIn for professionals.

### 5.2 Screens

| Screen | Description | Platform |
|--------|-------------|----------|
| **My Profile (View)** | How others see your profile | Mobile, Web |
| **Edit Profile** | Edit all profile fields | Mobile, Web |
| **Portfolio Manager** | Manage featured work | Mobile, Web |
| **Portfolio Item Editor** | Add/edit portfolio piece | Mobile, Web |
| **Media Library** | All uploaded content | Web |
| **Public Profile (Web)** | underdawg.com/username | Web only |
| **Profile Analytics** | Profile views, clicks, engagement | Mobile, Web |
| **QR Code & Share** | Share profile easily | Mobile |
| **Profile Settings** | Visibility, contact settings | Mobile, Web |

### 5.3 Profile Sections

| Section | Description | Editable |
|---------|-------------|----------|
| **Header** | Cover image, profile photo | Yes |
| **Identity** | Name, username, verified badge | Partial |
| **Bio** | Short description (300 chars) | Yes |
| **Creator Type** | Visual badge showing type | Yes |
| **Stats** | Followers, Following, Reputation Score | Auto |
| **Niche Tags** | Primary interests/categories | Yes |
| **Skills** | What they can do | Yes |
| **Location** | City, Country | Yes |
| **Connected Platforms** | Linked accounts with follower counts | Yes |
| **Portfolio** | Featured best work (6-12 pieces) | Yes |
| **Content Feed** | All posted content | Auto |
| **Achievements** | Badges, milestones, awards | Auto |
| **Collaboration Status** | Open to collabs, brand deals, etc. | Yes |
| **Contact/Booking** | How to reach for business | Yes |
| **Rates** | Starting rates for services (optional) | Yes |
| **Manager** | If represented, show manager | Auto |

### 5.4 Profile Header

| Element | Spec |
|---------|------|
| Cover Image | 1500x500px, max 5MB |
| Profile Photo | 400x400px, max 5MB, circle crop |
| Name | 2-50 characters |
| Username | @handle, 3-30 chars |
| Verified Badge | Blue checkmark if verified |
| Creator Type Badge | Icon showing primary creator type |

### 5.5 Portfolio System

| Feature | Description |
|---------|-------------|
| **Portfolio Grid** | 6-12 featured pieces displayed prominently |
| **Portfolio Piece** | Image, Video, Audio, or Link with description |
| **Piece Metadata** | Title, Description, Date, Category, Credits |
| **Piece Stats** | Views, Likes, Saves (if from feed) |
| **External Links** | Link to full project elsewhere |
| **Reorder** | Drag-drop to arrange priority |
| **Categories** | Group by project type |

### 5.6 Portfolio Piece Types

| Type | Supported Formats | Max Size | Display |
|------|-------------------|----------|---------|
| **Image** | JPG, PNG, WebP | 10MB | Full image |
| **Video** | MP4, MOV | 500MB | Video player |
| **Audio** | MP3, WAV, M4A | 50MB | Audio player |
| **Link** | URL | N/A | Preview card |
| **PDF** | PDF | 20MB | Document viewer |
| **Embed** | YouTube, Vimeo, Spotify, SoundCloud | N/A | Embedded player |

### 5.7 Connected Platforms Display

| Platform | Display Data |
|----------|--------------|
| Instagram | @handle, Follower count |
| YouTube | Channel name, Subscriber count |
| TikTok | @handle, Follower count |
| Twitter/X | @handle, Follower count |
| Spotify | Artist name, Monthly listeners |
| Twitch | Channel name, Followers |
| Other | Name, Link |

### 5.8 Collaboration Status Options

| Status | Meaning |
|--------|---------|
| **Open to Brand Deals** | Accepting sponsored content |
| **Open to Collaborations** | Want to collab with other creators |
| **Available for Hire** | Accepting freelance work |
| **Taking Commissions** | Accepting custom art/content commissions |
| **Open to Management** | Looking for manager representation |
| **Not Available** | Not accepting opportunities currently |

### 5.9 Profile Visibility Settings

| Setting | Options |
|---------|---------|
| **Profile Visibility** | Public, Private (followers only), Hidden |
| **Contact Info Visibility** | Everyone, Verified Brands Only, No one |
| **Rates Visibility** | Everyone, Verified Brands Only, Hidden |
| **Portfolio Visibility** | Everyone, Logged-in users, Private |
| **Show Connected Platforms** | Yes / No |
| **Show Follower Count** | Yes / No |
| **Show Reputation Score** | Yes / No |

### 5.10 Profile Analytics

| Metric | Description |
|--------|-------------|
| Profile Views | Total views (daily, weekly, monthly, all-time) |
| Profile Views by Source | From search, feed, direct, external |
| Link Clicks | Clicks on external links |
| Contact Button Clicks | Clicks on email/contact button |
| Portfolio Item Views | Views per portfolio piece |
| New Followers from Profile | Followers gained from profile visits |
| Profile Completion Score | % of profile filled out |

---

## 6. Module 3 — Content Studio

### 6.1 Purpose
Enable creators to upload, edit, organize, and publish content to Underdawg and optionally cross-post to connected platforms.

### 6.2 Screens

| Screen | Description | Platform |
|--------|-------------|----------|
| **Create Button** | FAB or tab bar button | Mobile |
| **Content Type Selector** | Image, Video, Audio, Text, Story | Mobile, Web |
| **Image Upload** | Upload or capture images | Mobile, Web |
| **Image Editor** | Crop, filter, adjust, text overlay | Mobile |
| **Video Upload** | Upload or record video | Mobile, Web |
| **Video Editor** | Trim, filters, music, text, effects | Mobile |
| **Audio Upload** | Upload audio files | Mobile, Web |
| **Audio Editor** | Trim, fade, cover art | Mobile, Web |
| **Text Post Composer** | Write text-based post | Mobile, Web |
| **Story Creator** | Create ephemeral story | Mobile |
| **Post Details** | Caption, tags, location, settings | Mobile, Web |
| **Cross-Post Selector** | Choose platforms to post to | Mobile, Web |
| **Schedule Post** | Set future publish time | Mobile, Web |
| **Draft Manager** | View and manage drafts | Mobile, Web |
| **Media Library** | All uploaded content organized | Web |
| **Content Calendar** | Visual calendar of scheduled posts | Web |
| **Posting Confirmation** | Success screen with share options | Mobile, Web |

### 6.3 Content Types

| Type | Description | Formats | Max Duration/Size |
|------|-------------|---------|-------------------|
| **Image Post** | Single or carousel images | JPG, PNG, WebP | 10MB per image, 10 images max |
| **Video Post** | Short or long-form video | MP4, MOV | 60 min, 4GB |
| **Short Video** | TikTok/Reel style vertical video | MP4, MOV | 3 min, 500MB |
| **Audio Post** | Music track or audio clip | MP3, WAV, M4A | 30 min, 100MB |
| **Text Post** | Text-only or text-with-image | N/A | 5000 characters |
| **Story** | Ephemeral 24-hour content | Image, Video | 15 sec video, 5MB image |
| **Live** | Live streaming (future) | Stream | TBD |

### 6.4 Image Editor Features

| Feature | Description |
|---------|-------------|
| **Crop** | Free crop, 1:1, 4:5, 16:9, 9:16 |
| **Rotate** | Rotate 90° or free rotation |
| **Filters** | 20+ preset filters |
| **Adjust** | Brightness, Contrast, Saturation, Warmth, Fade, Sharpen |
| **Text Overlay** | Add text with fonts, colors, styles |
| **Stickers** | Add stickers and graphics |
| **Draw** | Freehand drawing |
| **Blur** | Blur regions |

### 6.5 Video Editor Features

| Feature | Description |
|---------|-------------|
| **Trim** | Cut start and end |
| **Split** | Split into segments |
| **Speed** | 0.5x, 1x, 1.5x, 2x |
| **Filters** | 20+ preset filters |
| **Music** | Add music from library or upload |
| **Text** | Add text at timestamps |
| **Stickers** | Add stickers at timestamps |
| **Voiceover** | Record voiceover |
| **Transitions** | Transition effects between clips |
| **Cover Frame** | Select thumbnail |

### 6.6 Post Metadata

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| **Caption** | No | String | Max 2200 characters |
| **Hashtags** | No | Tags | Extracted or manual, max 30 |
| **Mention** | No | @handles | Tag other creators |
| **Location** | No | Place | Geotag |
| **Content Category** | Yes | Select | Art, Music, Dance, Comedy, etc. |
| **Collaboration Tags** | No | @handles | Credit collaborators |
| **Product Tags** | No | Products | Tag merchandise (if applicable) |
| **Sensitive Content** | No | Toggle | Mark as sensitive |
| **Comments** | No | Toggle | Enable/disable comments |
| **Download** | No | Toggle | Allow others to download |

### 6.7 Cross-Posting

| Feature | Description |
|---------|-------------|
| **Platform Selection** | Toggle which connected platforms to post to |
| **Platform-Specific Caption** | Edit caption per platform |
| **Platform-Specific Hashtags** | Adjust hashtags per platform |
| **Post Status** | Track if cross-post succeeded or failed |
| **Retry Failed** | Retry failed cross-posts |

### 6.8 Scheduling

| Feature | Description |
|---------|-------------|
| **Date Picker** | Select future date |
| **Time Picker** | Select time (in user's timezone) |
| **Optimal Time Suggestion** | AI suggests best posting time |
| **Recurring Schedule** | Post at same time daily/weekly |
| **Queue** | Add to posting queue |
| **Calendar View** | See all scheduled posts on calendar |

### 6.9 Drafts

| Feature | Description |
|---------|-------------|
| **Auto-Save** | Drafts saved automatically |
| **Draft List** | View all drafts |
| **Edit Draft** | Continue editing |
| **Delete Draft** | Remove draft |
| **Draft Preview** | See how draft will look |

### 6.10 Media Library (Web)

| Feature | Description |
|---------|-------------|
| **All Media** | Grid view of all uploads |
| **Filter by Type** | Images, Videos, Audio |
| **Filter by Date** | Date range picker |
| **Filter by Status** | Published, Draft, Scheduled |
| **Search** | Search by caption, tags |
| **Bulk Select** | Select multiple items |
| **Bulk Delete** | Delete multiple items |
| **Storage Usage** | Track storage used |

---

## 7. Module 4 — Feed & Discovery

### 7.1 Purpose
Help creators discover content, find inspiration, connect with peers, and grow their presence through algorithmic and curated discovery.

### 7.2 Screens

| Screen | Description | Platform |
|--------|-------------|----------|
| **Home Feed** | Personalized content from followed + recommended | Mobile, Web |
| **Following Feed** | Content only from followed creators | Mobile, Web |
| **Explore** | Discover new creators and trending content | Mobile, Web |
| **Search** | Search creators, content, hashtags, sounds | Mobile, Web |
| **Search Results** | Results organized by type | Mobile, Web |
| **Hashtag Page** | All content under a hashtag | Mobile, Web |
| **Sound/Music Page** | All content using a sound | Mobile, Web |
| **Location Page** | All content from a location | Mobile, Web |
| **Trending** | What's trending now | Mobile, Web |
| **Categories** | Browse by content category | Mobile, Web |
| **Category Page** | Content within a category | Mobile, Web |
| **Challenges** | Active challenges to participate in | Mobile, Web |
| **Challenge Detail** | Specific challenge with entries | Mobile, Web |
| **For You** | AI-curated content | Mobile |

### 7.3 Home Feed Algorithm Signals

| Signal | Weight | Description |
|--------|--------|-------------|
| **Following** | High | Content from followed creators |
| **Engagement History** | High | Similar to content user engaged with |
| **Creator Type Affinity** | Medium | Same creator types user follows |
| **Niche Affinity** | Medium | Same niches user engages with |
| **Recency** | Medium | Recent posts boosted |
| **Engagement Rate** | Medium | Content with high engagement rate |
| **Creator Reputation** | Low | Higher reputation creators slightly boosted |
| **Diversity** | System | Ensure variety in feed |
| **Growth Potential** | Medium | **Boost emerging creators showing promise** |

> **Note:** Unlike other platforms, Underdawg's algorithm includes a **"Growth Potential" signal** that boosts emerging creators who show quality and consistency — implementing our "Growth over Popularity" philosophy.

### 7.4 Explore Page Sections

| Section | Description |
|---------|-------------|
| **Search Bar** | Search at top |
| **Trending Hashtags** | Top 10 trending hashtags |
| **Featured Creators** | Editorially curated creators |
| **Rising Creators** | Fast-growing emerging creators |
| **Trending Content** | High-engagement recent content |
| **Categories Grid** | Browse by category |
| **Challenges Banner** | Active challenges to join |
| **Near You** | Creators in user's location |
| **New to Underdawg** | Recently joined quality creators |

### 7.5 Search System

| Search Type | What It Searches | Results |
|-------------|------------------|---------|
| **All** | Everything | Combined results |
| **Creators** | Usernames, names, bios | Creator profiles |
| **Content** | Captions, hashtags | Posts |
| **Hashtags** | Hashtag text | Hashtag pages |
| **Audio/Sounds** | Sound names | Sound pages |
| **Locations** | Place names | Location pages |
| **Jobs** | Brand deal titles | Job listings |

### 7.6 Challenges System

| Feature | Description |
|---------|-------------|
| **Challenge Creation** | Admin creates challenges |
| **Challenge Types** | Hashtag challenge, Sound challenge, Theme challenge |
| **Challenge Details** | Title, Description, Rules, Duration, Prizes |
| **Entry Submission** | Create post with challenge hashtag/sound |
| **Entry Gallery** | All entries displayed |
| **Voting** | Community votes (if applicable) |
| **Winner Selection** | Auto by votes or manual by admin |
| **Prizes** | Credits, Badges, Features, Cash |

### 7.7 Content Engagement Actions

| Action | Description | Effect |
|--------|-------------|--------|
| **Like** | Heart a post | Like count +1, Creator notified |
| **Comment** | Text comment | Comment count +1, Creator notified |
| **Share** | Share to external or DM | Share count +1 |
| **Save** | Save to collection | Save count +1 |
| **Repost** | Repost to own profile | Repost count +1 |
| **Duet/Remix** | Create content using original | Duet count +1 |
| **Follow** | Follow creator from post | Follower count +1 |
| **Report** | Report inappropriate content | Queue for moderation |
| **Not Interested** | Hide this type of content | Reduce in algorithm |

### 7.8 Collections (Saved Content)

| Feature | Description |
|---------|-------------|
| **Default Collection** | "Saved" - all saved content |
| **Custom Collections** | Create named collections |
| **Add to Collection** | When saving, choose collection |
| **Collection Privacy** | Public or Private |
| **Share Collection** | Share link to collection |

---

## 8. Module 5 — Audience Ownership

### 8.1 Purpose
The core differentiator. Help creators own their audience by migrating followers from platforms they don't control to owned channels (email, SMS, community).

### 8.2 Screens

| Screen | Description | Platform |
|--------|-------------|----------|
| **Audience Dashboard** | Overview of owned vs rented audience | Mobile, Web |
| **Platform Connections** | Manage connected platforms | Mobile, Web |
| **Connect Platform** | OAuth flow for new platform | Mobile, Web |
| **Platform Detail** | Analytics from specific platform | Web |
| **Top Fans Identifier** | See most engaged followers | Web |
| **Migration Tools** | Tools to move followers | Web |
| **Email List Manager** | Manage email subscribers | Web |
| **SMS List Manager** | Manage SMS subscribers | Web |
| **Signup Form Builder** | Create embeddable forms | Web |
| **Landing Page Builder** | Create link-in-bio landing page | Web |
| **Email Composer** | Create and send emails | Web |
| **SMS Composer** | Create and send SMS | Web |
| **Automation Builder** | Create automated sequences | Web |
| **Import Contacts** | Import existing contacts | Web |
| **Export Audience** | Export your audience data | Web |

### 8.3 Platform Connections

| Platform | Data Synced | Sync Frequency |
|----------|-------------|----------------|
| **Instagram** | Followers, Posts, Engagement, Comments, DMs | Every 6 hours |
| **YouTube** | Subscribers, Videos, Views, Comments | Every 6 hours |
| **TikTok** | Followers, Videos, Engagement | Every 6 hours |
| **Twitter/X** | Followers, Tweets, Engagement | Every 6 hours |
| **Spotify** | Listeners, Streams, Followers | Daily |
| **Twitch** | Followers, Subscribers, Views | Every 6 hours |

### 8.4 Audience Categories

| Category | Definition |
|----------|------------|
| **Rented Audience** | Followers on external platforms (you don't control) |
| **Owned Audience** | Email/SMS subscribers (you control) |
| **Super Fans** | Highly engaged across multiple touchpoints |
| **At Risk** | Previously engaged but activity declining |
| **New** | Recently followed/subscribed |

### 8.5 Top Fan Identification

| Signal | Weight | Description |
|--------|--------|-------------|
| **Multi-Platform Follow** | High | Follows on 2+ platforms |
| **Engagement Frequency** | High | Likes/comments multiple times per week |
| **Engagement Recency** | Medium | Recent engagement |
| **Comment Quality** | Medium | Meaningful comments vs emojis |
| **Share Behavior** | Medium | Shares content |
| **Purchase History** | High | Has bought merch/art |
| **Time Following** | Low | Long-term follower |

### 8.6 Migration Tools

| Tool | Description |
|------|-------------|
| **Top Fan Export** | Export list of top fan handles |
| **DM Templates** | Pre-written DM templates to invite to email list |
| **Story Templates** | Stories promoting email/SMS signup |
| **CTA Overlays** | Add signup CTA to content |
| **Link in Bio Page** | Landing page with signup form |
| **QR Code Generator** | QR code linking to signup |

### 8.7 Email List Features

| Feature | Description |
|---------|-------------|
| **Subscriber List** | View all email subscribers |
| **Segments** | Group by engagement, source, date |
| **Import CSV** | Import existing list |
| **Signup Forms** | Embeddable forms |
| **Double Opt-in** | Confirmation email option |
| **Unsubscribe Management** | Handle unsubscribes |
| **Bounce Handling** | Remove invalid emails |
| **Analytics** | Open rates, click rates |

### 8.8 Email Composer

| Feature | Description |
|---------|-------------|
| **Template Gallery** | Pre-designed templates |
| **Drag-Drop Builder** | Visual email builder |
| **Rich Text Editor** | Simple text editor option |
| **Personalization** | Insert subscriber name, etc. |
| **Preview** | Preview on desktop/mobile |
| **Test Send** | Send test to self |
| **Schedule** | Send later |
| **A/B Testing** | Test subject lines |

### 8.9 SMS Features

| Feature | Description |
|---------|-------------|
| **Subscriber List** | View SMS subscribers |
| **Compliance** | TCPA/DND compliance |
| **Compose SMS** | Write SMS (160 chars) |
| **MMS** | Send with image |
| **Schedule** | Send later |
| **Two-Way** | Receive replies |
| **Keywords** | Auto-response to keywords |
| **Analytics** | Delivery, clicks |

### 8.10 Automation

| Automation Type | Description |
|-----------------|-------------|
| **Welcome Sequence** | Emails after signup |
| **Re-engagement** | Email if inactive |
| **Birthday** | Birthday wishes |
| **Post-Purchase** | After merch purchase |
| **New Content Alert** | When new content posted |
| **Milestone** | Anniversary, follower milestone |

### 8.11 Landing Page Builder

| Feature | Description |
|---------|-------------|
| **Templates** | Pre-designed landing pages |
| **Blocks** | Bio, Links, Social, Email signup, Video, Image |
| **Custom Domain** | Use own domain |
| **Subdomain** | underdawg.com/yourname |
| **Analytics** | Page views, clicks |
| **A/B Testing** | Test different versions |

---

## 9. Module 6 — Analytics & Intelligence

### 9.1 Purpose
Give creators unprecedented cross-platform insights to make data-driven content and career decisions.

### 9.2 Screens

| Screen | Description | Platform |
|--------|-------------|----------|
| **Analytics Dashboard** | Overview of all key metrics | Mobile, Web |
| **Underdawg Analytics** | Analytics for Underdawg activity | Mobile, Web |
| **Cross-Platform Analytics** | Unified view across all platforms | Web |
| **Platform Deep Dive** | Detailed analytics per platform | Web |
| **Content Performance** | How each piece of content performed | Mobile, Web |
| **Audience Insights** | Demographics, interests, behavior | Web |
| **Growth Tracking** | Follower growth over time | Mobile, Web |
| **Revenue Analytics** | Income from all sources | Mobile, Web |
| **Competitor Analysis** | Compare with similar creators | Web |
| **AI Insights** | AI-generated recommendations | Mobile, Web |
| **Best Posting Times** | When to post for max engagement | Web |
| **Trend Detection** | What's trending in your niche | Web |
| **Content Ideas** | AI-generated content suggestions | Mobile, Web |

### 9.3 Dashboard Metrics (Overview)

| Metric | Description | Timeframe |
|--------|-------------|-----------|
| **Total Followers** | Across all platforms + Underdawg | Current |
| **Follower Growth** | Net new followers | 7d, 30d, 90d |
| **Total Engagement** | Likes + Comments + Shares | 7d, 30d, 90d |
| **Engagement Rate** | (Engagement / Followers) × 100 | 7d, 30d |
| **Content Published** | Number of posts | 7d, 30d |
| **Profile Views** | Views on Underdawg profile | 7d, 30d |
| **Total Revenue** | All income sources | This month, Last month |
| **Reputation Score** | Current reputation | Current |

### 9.4 Underdawg Analytics

| Metric | Description |
|--------|-------------|
| **Followers** | Underdawg followers |
| **Following** | Accounts following |
| **Posts** | Total posts on Underdawg |
| **Impressions** | Times content was shown |
| **Reach** | Unique accounts reached |
| **Likes** | Total likes received |
| **Comments** | Total comments received |
| **Shares** | Total shares |
| **Saves** | Total saves |
| **Profile Visits** | Visits to profile |
| **Website Clicks** | Clicks on profile links |
| **Email Signups** | Signups from Underdawg |

### 9.5 Cross-Platform Analytics

| Metric | Aggregation |
|--------|-------------|
| **Total Reach** | Sum of followers across all platforms |
| **Weighted Reach** | Normalized by engagement rate |
| **Platform Distribution** | % of audience per platform |
| **Cross-Platform Growth** | Growth rate per platform |
| **Best Performing Platform** | Highest engagement |
| **Platform Health Score** | Algorithm performance per platform |
| **Cross-Posting Performance** | Same content, different platforms |

### 9.6 Content Performance

| Metric | Description |
|--------|-------------|
| **Impressions** | Times shown |
| **Reach** | Unique viewers |
| **Likes** | Total likes |
| **Comments** | Total comments |
| **Shares** | Total shares |
| **Saves** | Total saves |
| **Engagement Rate** | (Eng / Reach) × 100 |
| **Watch Time** | Average view duration (video) |
| **Completion Rate** | % who watched full video |
| **Click-Through Rate** | Clicks on links/CTAs |
| **Follows from Post** | New followers from this post |
| **Revenue Generated** | If linked to sales |

### 9.7 Audience Insights

| Insight | Description |
|---------|-------------|
| **Demographics** | Age, Gender distribution |
| **Location** | Top countries, cities |
| **Active Hours** | When audience is online |
| **Interests** | Topics they engage with |
| **Other Creators Followed** | Who else they follow |
| **Device** | Mobile vs Desktop |
| **Language** | Primary languages |

### 9.8 AI Insights

| Insight Type | Description |
|--------------|-------------|
| **Trend Alerts** | "Topic X is trending in your niche" |
| **Content Recommendations** | "Your how-to videos get 3x engagement" |
| **Optimal Posting Time** | "Post at 6pm Tue-Thu for best results" |
| **Hashtag Suggestions** | "Try these hashtags for more reach" |
| **Audience Decline Alert** | "Engagement dropping, here's why" |
| **Collaboration Suggestions** | "Collab with @creator for audience overlap" |
| **Revenue Opportunities** | "Brands in X niche are hiring" |
| **Competitor Movement** | "Similar creators posting more about Y" |

### 9.9 Competitor Analysis

| Feature | Description |
|---------|-------------|
| **Add Competitors** | Track up to 10 similar creators |
| **Follower Comparison** | Side-by-side follower count |
| **Growth Comparison** | Who's growing faster |
| **Engagement Comparison** | Engagement rate comparison |
| **Content Comparison** | Posting frequency, types |
| **Hashtag Analysis** | What hashtags they use |
| **Best Content** | Their top performing posts |

---

## 10. Module 7 — Job Board & Brand Deals

### 10.1 Purpose
Connect creators with paid opportunities from brands and agencies in a transparent marketplace built for creators, not brands.

### 10.2 Screens

| Screen | Description | Platform |
|--------|-------------|----------|
| **Job Board** | Browse all opportunities | Mobile, Web |
| **Job Filters** | Filter by niche, budget, type | Mobile, Web |
| **Job Detail** | Full details of an opportunity | Mobile, Web |
| **Apply to Job** | Submit application/proposal | Mobile, Web |
| **My Applications** | Track all applications | Mobile, Web |
| **Application Detail** | Status of specific application | Mobile, Web |
| **Active Deals** | Ongoing brand deals | Mobile, Web |
| **Deal Detail** | Specific deal workspace | Mobile, Web |
| **Deliverables** | Submit work for approval | Mobile, Web |
| **Contract View** | View and sign contracts | Mobile, Web |
| **Negotiation Chat** | Negotiate with brand | Mobile, Web |
| **Rate Card** | Set your pricing | Web |
| **Past Deals** | History of completed deals | Mobile, Web |
| **Reviews Received** | Brand reviews of your work | Mobile, Web |

### 10.3 Job Types

| Type | Description | Typical Payment |
|------|-------------|-----------------|
| **Sponsored Post** | Create post featuring brand | Per post |
| **Story/Reel** | Short-form sponsored content | Per piece |
| **Video Integration** | Mention brand in video | Per video |
| **Brand Ambassador** | Ongoing partnership | Monthly retainer |
| **Product Review** | Review brand's product | Per review + free product |
| **Event Coverage** | Cover brand's event | Per event |
| **UGC Creation** | Create content for brand's use | Per asset |
| **Affiliate** | Commission on sales driven | % of sales |
| **Takeover** | Take over brand's account | Per day |
| **Get Viral Campaign** | Participate in coordinated amplification | Per post (₹1K - ₹30K) |
| **Custom** | Unique requirements | Negotiated |

### 10.4 Job Listing Fields

| Field | Description |
|-------|-------------|
| **Title** | Job title |
| **Brand** | Company name + logo |
| **Type** | Job type |
| **Niche/Category** | Relevant niches |
| **Budget Range** | Min-Max budget |
| **Payment Structure** | Flat, per post, affiliate |
| **Creator Requirements** | Min followers, niche, location |
| **Deliverables** | What needs to be created |
| **Timeline** | Deadline, posting schedule |
| **Usage Rights** | How brand can use content |
| **Exclusivity** | Any exclusivity requirements |
| **Application Deadline** | When applications close |
| **Applicant Count** | How many have applied |

### 10.5 Application Process

```
CREATOR FINDS JOB
       │
       ▼
CREATOR APPLIES
├── Cover letter/pitch
├── Proposed rate
├── Proposed timeline
├── Relevant portfolio pieces
└── Any questions
       │
       ▼
BRAND REVIEWS APPLICATION
       │
       ├──► REJECTED ──► Creator notified
       │
       ▼
SHORTLISTED
       │
       ▼
NEGOTIATION (Chat)
├── Rate negotiation
├── Scope clarification
├── Timeline discussion
└── Terms alignment
       │
       ▼
CONTRACT GENERATED
       │
       ▼
BOTH PARTIES SIGN
       │
       ▼
DEAL ACTIVE
├── Deliverable submission
├── Brand review
├── Revision requests
└── Approval
       │
       ▼
PAYMENT RELEASED
       │
       ▼
DEAL COMPLETE
└── Both parties leave reviews
```

### 10.6 Deal Workspace

| Feature | Description |
|---------|-------------|
| **Overview** | Deal summary, status, timeline |
| **Contract** | View signed contract |
| **Deliverables** | List of what's needed |
| **Submit Work** | Upload content for review |
| **Revision Requests** | Brand feedback |
| **Messages** | Chat with brand |
| **Files** | Shared files/assets |
| **Payment Status** | Payment timeline |
| **Milestones** | Track progress |

### 10.7 Rate Card

| Feature | Description |
|---------|-------------|
| **Service Types** | List services offered |
| **Base Rates** | Starting price per service |
| **Add-ons** | Extra charges (rush, exclusivity, usage) |
| **Packages** | Bundled offerings |
| **Custom Quote** | Enable custom quote requests |
| **Currency** | Preferred currency |
| **Visibility** | Who can see rates |

### 10.8 Pricing Transparency Features

| Feature | Description |
|---------|-------------|
| **Market Rates** | See what similar creators charge |
| **Rate Calculator** | Estimate fair rate based on metrics |
| **Historical Rates** | Your past deal rates |
| **Industry Benchmarks** | Rates by niche and follower count |

> **💡 KEY FEATURE:** Pricing transparency ensures no creator gets underpaid. Underdawg shows market rates so creators negotiate with confidence.

### 10.9 Deal Statuses

| Status | Meaning |
|--------|---------|
| **Applied** | Application submitted |
| **Shortlisted** | Brand interested |
| **Negotiating** | In discussion |
| **Contract Sent** | Awaiting signature |
| **Active** | Deal in progress |
| **In Review** | Deliverables submitted |
| **Revision** | Changes requested |
| **Approved** | Work approved |
| **Completed** | Deal done, paid |
| **Cancelled** | Deal cancelled |
| **Disputed** | Issue being resolved |

### 10.10 Contract Features

| Feature | Description |
|---------|-------------|
| **Standardized Terms** | Underdawg-standard creator-protective terms |
| **Custom Clauses** | Brand can add custom terms |
| **Digital Signature** | E-sign in app |
| **Version History** | Track contract changes |
| **Contract Templates** | Quick contract generation |
| **Legal Review Flag** | Mark for legal review if complex |

---

## 11. Module 8 — Merchandise Studio

### 11.1 Purpose
Enable creators to design, produce, and sell custom merchandise with zero upfront cost. Underdawg handles production and fulfillment; creator handles design and promotion. Creators get both an in-app store AND a standalone e-commerce website.

### 11.2 Screens

| Screen | Description | Platform |
|--------|-------------|----------|
| **Merch Dashboard** | Overview of merch business | Mobile, Web |
| **Create Product** | Start new product design | Web |
| **Product Type Selector** | Multi-select products to create | Web |
| **Design Upload** | Upload artwork | Web |
| **AI Mockup Generator** | View AI-generated mockup options | Web |
| **Designer Connection** | Connect with professional designer | Web |
| **Design Selection** | Choose from AI or designer options | Web |
| **Design Placement** | Position design on product | Web |
| **Product Preview** | See final product mockups | Web |
| **Pricing Setup** | Set retail price, see margins | Web |
| **Product Detail** | View/edit product | Mobile, Web |
| **My Products** | All created products | Mobile, Web |
| **In-App Merch Store** | Your storefront within Underdawg | Mobile, Web |
| **E-commerce Site Settings** | Customize standalone website | Web |
| **E-commerce Site Preview** | Preview standalone website | Web |
| **Store Settings** | Customize both stores | Web |
| **Orders** | View merch orders | Mobile, Web |
| **Order Detail** | Specific order details | Mobile, Web |
| **Merch Analytics** | Sales analytics | Web |
| **Payouts** | View merch earnings | Mobile, Web |
| **Samples** | Order samples for self | Web |

### 11.3 Product Categories

| Category | Products Available |
|----------|-------------------|
| **Apparel** | T-shirts, Hoodies, Tank tops, Sweatshirts, Jackets |
| **Headwear** | Caps, Beanies, Bucket hats |
| **Accessories** | Tote bags, Backpacks, Phone cases, Mugs, Water bottles |
| **Posters & Prints** | Posters, Art prints, Canvas prints |
| **Stickers** | Die-cut stickers, Sticker sheets |
| **Home & Living** | Pillows, Blankets, Towels |
| **Tech** | Mouse pads, Laptop sleeves |

### 11.4 Product Creation Flow

```
SELECT PRODUCT TYPES (Multi-Select)
├── T-shirt
├── Hoodie
├── Mug
├── Cap
├── Tote Bag
├── Poster
└── (Select multiple at once)
       │
       ▼
UPLOAD DESIGN
├── Upload image/vector (PNG, SVG, AI)
├── Design requirements shown per product
└── Tips for best results
       │
       ▼
AI MOCKUP GENERATION
├── AI generates multiple design variations
├── Shows design on ALL selected products
├── Multiple color/style options
├── Different design placements
└── Preview in realistic mockups
       │
       ▼
DESIGN PATH SELECTION
├── Option A: Choose AI-generated design (FREE)
│   └── Select favorite from AI options
│
└── Option B: Connect with Professional Designer (PAID)
    ├── Browse designer profiles
    ├── Get quotes
    ├── Pay for custom design
    └── Receive professional mockups
       │
       ▼
FINALIZE DESIGN
├── Select final design for each product
├── Position adjustments
├── Color variant selection
└── Preview all angles
       │
       ▼
SET PRICING (Per Product)
├── Base cost shown (production cost)
├── Set your profit margin
├── See retail price
├── Compare to similar products
└── Bulk pricing discounts
       │
       ▼
PRODUCT DETAILS
├── Product name
├── Description
├── Tags
└── Category
       │
       ▼
SELLING CHANNELS SETUP
├── Enable in-app store (default ON)
├── Enable standalone e-commerce website
├── Customize store URL (yourname.underdawg.store)
└── Store branding options
       │
       ▼
PUBLISH
├── Products live on in-app store
├── Standalone e-commerce site generated
├── Share links generated
└── Promote to audience
```

### 11.5 AI Mockup Generator

| Feature | Description |
|---------|-------------|
| **Multi-Product Generation** | Generate mockups for all selected products at once |
| **Design Variations** | AI creates multiple variations of the uploaded design |
| **Color Options** | Shows design on different product colors |
| **Placement Options** | Center, pocket, full-print, back, sleeve |
| **Realistic Mockups** | High-quality 3D product mockups |
| **Quick Preview** | See all options in a gallery |
| **Compare View** | Side-by-side comparison of options |

### 11.6 Professional Designer Connection

| Feature | Description |
|---------|-------------|
| **Designer Directory** | Browse vetted professional designers |
| **Designer Profiles** | Portfolio, ratings, specialties, pricing |
| **Request Quote** | Submit design brief, get quotes |
| **Pricing Range** | ₹2,000 - ₹25,000+ depending on complexity |
| **Communication** | In-app chat with designer |
| **Design Delivery** | Receive professional mockups |
| **Revision Rounds** | Typically 2-3 revisions included |
| **Payment** | Pay through platform (escrow) |

### 11.7 Design Requirements

| Product | Min Resolution | File Types | Print Area |
|---------|---------------|------------|------------|
| T-shirt (Front) | 4000x4000px | PNG, SVG | 12" x 16" |
| T-shirt (Back) | 4000x4000px | PNG, SVG | 12" x 16" |
| Hoodie | 4000x4000px | PNG, SVG | 12" x 12" |
| Mug | 2000x800px | PNG, SVG | Wraparound |
| Poster | 300 DPI | PNG, PDF | Varies |
| Sticker | 1000x1000px | PNG, SVG | Die-cut shape |
| Phone Case | 2000x3000px | PNG, SVG | Case face |

### 11.8 Pricing Model

| Component | Description |
|-----------|-------------|
| **Base Cost** | Underdawg's production cost (varies by product) |
| **Creator Margin** | Creator sets any markup they want |
| **Retail Price** | Base Cost + Creator Margin |
| **Underdawg Commission** | 20% of Creator Margin |
| **Creator Earnings** | 80% of Creator Margin |

**Example:**
- Base Cost: ₹500 (Underdawg's cost to produce)
- Creator Margin: ₹300 (what creator adds)
- Retail Price: ₹800 (what customer pays)
- Underdawg Commission: ₹60 (20% of ₹300)
- Creator Earnings: ₹240 (80% of ₹300)

### 11.9 Selling Channels

| Channel | Description | URL |
|---------|-------------|-----|
| **In-App Store** | Store within creator's Underdawg profile | underdawg.com/username/store |
| **Standalone E-commerce Site** | Fully independent website auto-generated | yourname.underdawg.store OR custom domain |

#### Standalone E-commerce Site Features

| Feature | Description |
|---------|-------------|
| **Auto-Generated** | Site created automatically when merch is published |
| **Custom Subdomain** | yourname.underdawg.store |
| **Custom Domain** | Connect your own domain (optional) |
| **Branding** | Logo, colors, fonts customization |
| **Product Pages** | Individual pages for each product |
| **Collections** | Group products by type/theme |
| **Shopping Cart** | Full e-commerce functionality |
| **Checkout** | Integrated payment processing |
| **Order Tracking** | Customers can track orders |
| **Mobile Optimized** | Works on all devices |
| **SEO Ready** | Search engine optimized |
| **Analytics** | Track visitors, conversions |
| **Share Links** | Easy sharing to social media |

### 11.10 Order Fulfillment

| Step | Handler | Timeline |
|------|---------|----------|
| Order Placed | System | Instant |
| Order Confirmed | System | Instant |
| Sent to Production | System | 1-2 hours |
| Printed/Made | Underdawg Partner | 2-4 days |
| Quality Check | Underdawg Partner | 1 day |
| Shipped | Shipping Partner | 1-7 days |
| Delivered | Shipping Partner | Tracking provided |

### 11.11 Store Customization

| Feature | In-App Store | E-commerce Site |
|---------|--------------|-----------------|
| Store Name | ✓ | ✓ |
| Store Banner | ✓ | ✓ |
| Store Description | ✓ | ✓ |
| Featured Products | ✓ | ✓ |
| Collections | ✓ | ✓ |
| Custom URL | underdawg.com/username/store | yourname.underdawg.store |
| Custom Domain | ✗ | ✓ |
| Color Theme | Limited | Full customization |
| Logo | ✗ | ✓ |
| Custom Pages | ✗ | About, Contact, FAQ |

### 11.12 Merch Analytics

| Metric | Description |
|--------|-------------|
| **Total Sales** | Lifetime revenue |
| **Orders** | Number of orders |
| **Units Sold** | Number of items sold |
| **Best Sellers** | Top performing products |
| **Revenue by Product** | Breakdown per product |
| **Revenue by Channel** | In-app store vs E-commerce site |
| **Conversion Rate** | Views to purchases |
| **Geographic Sales** | Sales by location |
| **Traffic Source** | Where buyers came from |
| **Abandoned Carts** | Started but didn't complete purchase |

---

## 12. Module 9 — Art Marketplace

### 12.1 Purpose
Enable visual artists to sell original artwork, prints, and digital art directly to fans and collectors.

### 12.2 Screens

| Screen | Description | Platform |
|--------|-------------|----------|
| **Marketplace Home** | Browse all art | Mobile, Web |
| **Art Categories** | Browse by category | Mobile, Web |
| **Art Detail** | View artwork listing | Mobile, Web |
| **Artist Store** | Creator's art listings | Mobile, Web |
| **List Art** | Create new listing | Web |
| **Edit Listing** | Modify listing | Web |
| **My Listings** | Manage all listings | Mobile, Web |
| **Art Orders** | Orders received | Mobile, Web |
| **Order Detail** | Specific order | Mobile, Web |
| **Shipping Setup** | Configure shipping | Web |
| **Art Analytics** | Sales performance | Web |
| **Commission Requests** | Custom art requests | Mobile, Web |
| **Commission Detail** | Manage commission | Mobile, Web |

### 12.3 Art Types

| Type | Description | Delivery |
|------|-------------|----------|
| **Original Artwork** | One-of-a-kind physical piece | Shipped |
| **Limited Print** | Numbered edition prints | Shipped |
| **Open Print** | Unlimited prints | Shipped |
| **Digital Download** | High-res digital file | Instant download |
| **NFT** | Blockchain-verified digital art | Wallet transfer |
| **Commission** | Custom artwork made to order | Varies |

### 12.4 Listing Fields

| Field | Required | Description |
|-------|----------|-------------|
| **Title** | Yes | Artwork name |
| **Images** | Yes | Multiple photos/previews |
| **Description** | Yes | About the artwork |
| **Art Type** | Yes | Original, Print, Digital, etc. |
| **Category** | Yes | Painting, Digital, Photo, etc. |
| **Price** | Yes | Selling price |
| **Edition Size** | If limited | Number available |
| **Dimensions** | If physical | Size of artwork |
| **Medium** | If physical | Materials used |
| **Year Created** | No | When created |
| **Shipping** | If physical | Shipping options |
| **Digital Files** | If digital | Files included |
| **Tags** | No | Searchability |

### 12.5 Pricing

| Component | Amount |
|-----------|--------|
| **Listing Fee** | Free |
| **Transaction Fee** | 10% of sale price |
| **Payment Processing** | 2.9% + ₹3 |
| **Creator Receives** | ~87% of sale price |

### 12.6 Shipping Options

| Option | Description |
|--------|-------------|
| **Creator Ships** | Creator handles shipping |
| **Underdawg Fulfillment** | Underdawg handles (for prints) |
| **Local Pickup** | Buyer picks up |
| **Free Shipping** | Creator absorbs cost |
| **Flat Rate** | Fixed shipping cost |
| **Calculated** | Based on location |

### 12.7 Commission System

| Feature | Description |
|---------|-------------|
| **Accept Commissions** | Toggle on profile |
| **Commission Types** | Types of work offered |
| **Pricing** | Starting prices per type |
| **Queue Status** | Open, Limited, Closed |
| **Wait Time** | Estimated completion time |
| **Deposit** | Upfront deposit percentage |
| **Revisions** | Number included |
| **Process** | Description of how it works |

### 12.8 Commission Flow

```
BUYER REQUESTS COMMISSION
├── Select commission type
├── Describe requirements
├── Reference images
└── Budget
       │
       ▼
CREATOR REVIEWS
       │
       ├──► DECLINE ──► Buyer notified
       │
       ▼
CREATOR QUOTES
├── Price
├── Timeline
└── Terms
       │
       ▼
BUYER ACCEPTS & PAYS DEPOSIT
       │
       ▼
CREATOR WORKS
├── Progress updates
├── WIP previews
└── Communication
       │
       ▼
CREATOR DELIVERS DRAFT
       │
       ▼
BUYER REVIEWS
       │
       ├──► REVISION ──► Creator revises
       │
       ▼
BUYER APPROVES
       │
       ▼
BUYER PAYS REMAINDER
       │
       ▼
FINAL DELIVERY
└── Files/Shipping
```

---

## 13. Module 10 — Financial Dashboard

### 13.1 Purpose
Unified view of all income streams, payouts, and financial management tools designed for creator income patterns.

### 13.2 Screens

| Screen | Description | Platform |
|--------|-------------|----------|
| **Financial Dashboard** | Overview of all finances | Mobile, Web |
| **Income Breakdown** | Revenue by source | Mobile, Web |
| **Transaction History** | All transactions | Mobile, Web |
| **Transaction Detail** | Specific transaction | Mobile, Web |
| **Pending Earnings** | Earned but not paid out | Mobile, Web |
| **Available Balance** | Ready to withdraw | Mobile, Web |
| **Payout Settings** | Configure payouts | Web |
| **Request Payout** | Withdraw funds | Mobile, Web |
| **Payout History** | Past payouts | Mobile, Web |
| **Tax Center** | Tax documents and tools | Web |
| **Invoice Generator** | Create invoices | Web |
| **Invoice History** | Past invoices | Web |
| **Financial Reports** | Exportable reports | Web |
| **Connected Accounts** | Bank/UPI connections | Web |
| **Revenue Forecast** | Predicted future income | Web |

### 13.3 Income Sources

| Source | Description | Payout Timing |
|--------|-------------|---------------|
| **Brand Deals** | Payments from deals | Per contract terms |
| **Merchandise** | Merch sales profit | Weekly |
| **Art Sales** | Marketplace sales | After delivery confirmed |
| **Tips** | Fan tips received | Instant to balance |
| **Subscriptions** | Recurring fan payments | Monthly |
| **Affiliate** | Commission from referrals | Monthly |
| **Get Viral** | Campaign participation | Per campaign |
| **Challenges** | Prize money won | After challenge ends |

### 13.4 Financial Dashboard Metrics

| Metric | Description |
|--------|-------------|
| **Total Earnings (All Time)** | Lifetime earnings |
| **Earnings This Month** | Current month |
| **Earnings Last Month** | Previous month |
| **Pending Balance** | Earned, not yet available |
| **Available Balance** | Ready to withdraw |
| **Next Payout Date** | When auto-payout scheduled |
| **Earnings by Source** | Pie chart breakdown |
| **Monthly Trend** | Line chart over time |

### 13.5 Transaction Types

| Type | Direction | Description |
|------|-----------|-------------|
| **Brand Deal Payment** | In | Payment from brand |
| **Merch Sale** | In | Profit from merch |
| **Art Sale** | In | Profit from art sale |
| **Tip Received** | In | Fan tip |
| **Subscription** | In | Monthly subscription |
| **Affiliate Commission** | In | Referral earnings |
| **Challenge Prize** | In | Competition winnings |
| **Get Viral Payment** | In | Campaign participation |
| **Payout** | Out | Withdrawal to bank |
| **Fee** | Out | Platform fees |
| **Refund** | Out | Refund issued |
| **Chargeback** | Out | Payment reversed |

### 13.6 Payout Settings

| Setting | Options |
|---------|---------|
| **Payout Method** | Bank Transfer, UPI, PayPal |
| **Bank Account** | Add/manage bank accounts |
| **UPI ID** | Add/manage UPI IDs |
| **Payout Schedule** | Auto weekly, Auto monthly, Manual |
| **Minimum Payout** | Minimum amount to trigger auto-payout |
| **Payout Currency** | Preferred currency |

### 13.7 Tax Center

| Feature | Description |
|---------|-------------|
| **Income Summary** | Total income by year |
| **Tax Forms** | Generate tax documents |
| **GST Details** | GST registration info |
| **TDS Records** | TDS deducted |
| **Export for CA** | Export data for accountant |
| **Tax Estimation** | Estimated tax liability |
| **Tax Saving Tips** | AI-powered tax tips |

### 13.8 Invoice Generator

| Feature | Description |
|---------|-------------|
| **Invoice Templates** | Professional templates |
| **Auto-Fill** | Auto-fill from deals |
| **Client Details** | Save client information |
| **Line Items** | Services and amounts |
| **Taxes** | Auto-calculate GST |
| **Payment Terms** | Net 15, Net 30, etc. |
| **Send Invoice** | Email directly |
| **Track Status** | Sent, Viewed, Paid |
| **Payment Link** | Include payment link |

### 13.9 Financial Reports

| Report | Description |
|--------|-------------|
| **Monthly Income** | Income by month |
| **Income by Source** | Breakdown by revenue type |
| **Yearly Summary** | Annual summary |
| **Tax Report** | Ready for filing |
| **Payout Report** | All payouts made |
| **Fee Report** | All fees paid |
| **Client Report** | Income by brand/client |

### 13.10 Revenue Forecast (AI)

| Feature | Description |
|---------|-------------|
| **Projected Monthly** | Expected income next month |
| **Projected Quarterly** | Expected income next quarter |
| **Confidence Level** | How confident the prediction |
| **Based On** | What data is used |
| **Scenarios** | Best case, Likely, Worst case |

---

## 14. Module 11 — Collaboration Hub

### 14.1 Purpose
Facilitate communication, collaboration requests, and networking between creators, brands, managers, and fans.

### 14.2 Screens

| Screen | Description | Platform |
|--------|-------------|----------|
| **Inbox** | All conversations | Mobile, Web |
| **Conversation** | Chat thread | Mobile, Web |
| **New Message** | Start new conversation | Mobile, Web |
| **Message Requests** | Requests from non-followers | Mobile |
| **Collab Requests** | Collaboration invitations | Mobile, Web |
| **Collab Request Detail** | Specific collab invite | Mobile, Web |
| **Send Collab Request** | Invite creator to collab | Mobile, Web |
| **Team Management** | Manage team members | Web |
| **Invite Team Member** | Add to team | Web |
| **Manager Connection** | Connect with managers | Web |
| **Manager Requests** | Manager representation requests | Mobile, Web |

### 14.3 Message Types

| Type | Description | Features |
|------|-------------|----------|
| **Direct Message** | 1:1 conversation | Text, Images, Voice, Links |
| **Group Chat** | Multiple participants | Text, Images, Voice, Links |
| **Collab Request** | Structured collab invite | Template, Accept/Decline |
| **Brand Inquiry** | Brand reaching out | Linked to profile |
| **Manager Inquiry** | Manager reaching out | Linked to profile |
| **Deal Message** | Within deal workspace | Contextual to deal |

### 14.4 Inbox Organization

| Category | Description |
|----------|-------------|
| **Primary** | Important conversations |
| **General** | Other conversations |
| **Requests** | Message requests |
| **Collabs** | Collaboration related |
| **Deals** | Brand deal related |
| **Archived** | Archived conversations |

### 14.5 Collab Request Structure

| Field | Description |
|-------|-------------|
| **Type** | Content collab, Guest appearance, Joint project |
| **Description** | What you want to create together |
| **Timeline** | When you want to do it |
| **Platform** | Where it will be posted |
| **Split** | How to split costs/revenue |
| **Message** | Personal message |

### 14.6 Message Features

| Feature | Description |
|---------|-------------|
| **Text** | Standard text messages |
| **Images** | Send photos |
| **Videos** | Send video clips |
| **Voice** | Voice messages |
| **Files** | Share documents |
| **Links** | URL previews |
| **Reactions** | React with emojis |
| **Reply** | Reply to specific message |
| **Forward** | Forward to another chat |
| **Delete** | Delete message |
| **Read Receipts** | See when read |
| **Typing Indicator** | See when typing |

### 14.7 Team Management

| Feature | Description |
|---------|-------------|
| **Team Roles** | Define roles (Manager, Assistant, Editor) |
| **Invite Member** | Invite by email |
| **Permissions** | What each role can access |
| **Activity Log** | What team members did |
| **Remove Member** | Remove from team |

### 14.8 Team Permissions

| Permission | Manager | Assistant | Editor |
|------------|---------|-----------|--------|
| View Analytics | ✓ | ✓ | ✗ |
| Reply to DMs | ✓ | ✓ | ✗ |
| Accept Deals | ✓ | ✗ | ✗ |
| Post Content | ✓ | ✓ | ✓ |
| Edit Profile | ✓ | ✗ | ✗ |
| View Financials | ✓ | ✗ | ✗ |
| Manage Merch | ✓ | ✓ | ✗ |

### 14.9 Manager Connection

| Feature | Description |
|---------|-------------|
| **Manager Discovery** | Browse managers looking for clients |
| **Manager Profiles** | See manager's roster, specialties |
| **Request Representation** | Apply to be managed |
| **Manager Requests** | See managers interested in you |
| **Contract Terms** | Standard management agreements |
| **Accept Manager** | Formalize relationship |
| **Manager Dashboard** | Manager sees your data (with permission) |

---

## 15. Module 12 — Reputation & Verification

### 15.1 Purpose
Build a portable, trustworthy reputation system that verifies authentic human creators and their real engagement.

### 15.2 Screens

| Screen | Description | Platform |
|--------|-------------|----------|
| **Reputation Dashboard** | Your reputation overview | Mobile, Web |
| **Reputation History** | Score changes over time | Mobile, Web |
| **Reputation Breakdown** | What affects your score | Web |
| **Verification Center** | Get verified | Mobile, Web |
| **Verification Steps** | Complete verification | Mobile, Web |
| **Badges** | All earned badges | Mobile, Web |
| **Achievements** | Milestones reached | Mobile, Web |
| **Reviews** | Reviews from brands | Mobile, Web |
| **Trust Score** | Authenticity metrics | Web |

### 15.3 Reputation Score Components

| Component | Weight | Description |
|-----------|--------|-------------|
| **Content Quality** | 20% | Engagement rate, completion rate |
| **Consistency** | 15% | Regular posting, reliability |
| **Engagement Authenticity** | 15% | Real vs fake engagement |
| **Community Standing** | 15% | Positive interactions, no violations |
| **Brand Reliability** | 15% | Deal completion, on-time delivery |
| **Audience Growth** | 10% | Organic growth rate |
| **Platform Tenure** | 10% | Time on platform, stability |

### 15.4 Reputation Tiers

| Tier | Score | Badge Color |
|------|-------|-------------|
| **New** | 0-39 | Gray |
| **Rising** | 40-59 | Bronze |
| **Established** | 60-79 | Silver |
| **Trusted** | 80-89 | Gold |
| **Elite** | 90-100 | Platinum |

### 15.5 Verification Levels

| Level | Requirements | Badge |
|-------|--------------|-------|
| **Email Verified** | Confirm email | ✓ email |
| **Phone Verified** | Confirm phone | ✓ phone |
| **Identity Verified** | Upload ID, selfie check | ✓ identity |
| **Creator Verified** | 1K+ followers, 60+ reputation, ID verified | Blue checkmark |
| **Authenticity Verified** | AI engagement analysis, manual review | Shield badge |

### 15.6 Identity Verification Flow

```
START VERIFICATION
       │
       ▼
SELECT ID TYPE
├── Passport
├── Driver's License
├── National ID
└── Aadhar
       │
       ▼
UPLOAD ID
├── Front photo
├── Back photo (if applicable)
└── Clear, readable
       │
       ▼
LIVENESS CHECK
├── Take selfie
├── Follow instructions (turn head, blink)
└── Match to ID photo
       │
       ▼
AI VERIFICATION
├── Document authenticity
├── Face match
└── Liveness confirmed
       │
       ▼
MANUAL REVIEW (if needed)
       │
       ▼
VERIFIED ✓
```

### 15.7 Badges System

| Badge | How to Earn |
|-------|-------------|
| **Verified Creator** | Complete verification |
| **Rising Star** | Fast follower growth |
| **Consistent Creator** | Posted weekly for 3+ months |
| **Engagement Master** | Top 10% engagement rate |
| **Brand Favorite** | 5+ completed deals, 4.5+ rating |
| **Community Pillar** | Positive community contributions |
| **Early Adopter** | Joined in first year |
| **Challenge Winner** | Won a platform challenge |
| **Top Seller** | Top 10% merch/art sales |
| **Mentor** | Helped other creators |

### 15.8 Brand Reviews

| Field | Description |
|-------|-------------|
| **Overall Rating** | 1-5 stars |
| **Communication** | 1-5 stars |
| **Timeliness** | 1-5 stars |
| **Content Quality** | 1-5 stars |
| **Professionalism** | 1-5 stars |
| **Written Review** | Text feedback |
| **Would Work Again** | Yes/No |

### 15.9 Authenticity Signals

| Signal | What It Checks |
|--------|----------------|
| **Engagement Velocity** | Sudden spikes = suspicious |
| **Follower Quality** | Bot followers detected |
| **Comment Analysis** | Generic vs genuine comments |
| **Growth Pattern** | Organic vs purchased |
| **Content Originality** | Original vs reposted |
| **Behavioral Analysis** | Human vs bot behavior |

---

## 16. Module 13 — Community & Engagement

### 16.1 Purpose
Foster a supportive creator community with meaningful interactions, not vanity metrics.

### 16.2 Screens

| Screen | Description | Platform |
|--------|-------------|----------|
| **Community Feed** | Posts from community | Mobile, Web |
| **Create Post** | Post to community | Mobile, Web |
| **Post Detail** | Single post with comments | Mobile, Web |
| **Creator Groups** | Join interest-based groups | Mobile, Web |
| **Group Detail** | Specific group | Mobile, Web |
| **Events** | Creator meetups, webinars | Mobile, Web |
| **Event Detail** | Specific event | Mobile, Web |
| **Mentorship** | Connect with mentors | Mobile, Web |
| **Q&A** | Ask community questions | Mobile, Web |
| **Polls** | Create/vote on polls | Mobile, Web |

### 16.3 Community Post Types

| Type | Description |
|------|-------------|
| **Discussion** | Text post for conversation |
| **Question** | Ask the community |
| **Win** | Share an achievement |
| **Struggle** | Share a challenge, get support |
| **Tip** | Share helpful advice |
| **Resource** | Share useful tools/links |
| **Collab Search** | Looking for collaborators |
| **Feedback Request** | Ask for feedback on work |

### 16.4 Creator Groups

| Feature | Description |
|---------|-------------|
| **Niche Groups** | By creator type (musicians, artists, etc.) |
| **Location Groups** | By city/region |
| **Interest Groups** | By topic |
| **Private Groups** | Invite-only communities |
| **Group Chat** | Group messaging |
| **Group Events** | Events within group |

### 16.5 Mentorship System

| Feature | Description |
|---------|-------------|
| **Become a Mentor** | Offer to help others |
| **Find a Mentor** | Search for mentors |
| **Mentor Profiles** | Expertise, availability |
| **Request Mentorship** | Apply to be mentored |
| **Mentorship Sessions** | Scheduled calls |
| **Mentor Reviews** | Rate your mentor |

---

## 17. Module 14 — Learning & Growth

### 17.1 Purpose
Help creators improve their craft and business through educational content and resources.

### 17.2 Screens

| Screen | Description | Platform |
|--------|-------------|----------|
| **Learning Hub** | All educational content | Mobile, Web |
| **Courses** | Structured courses | Mobile, Web |
| **Course Detail** | Specific course | Mobile, Web |
| **Lesson** | Video/text lesson | Mobile, Web |
| **Guides** | How-to guides | Mobile, Web |
| **Guide Detail** | Specific guide | Mobile, Web |
| **Resources** | Tools, templates, links | Mobile, Web |
| **Creator Toolkit** | Essential resources | Web |
| **Growth Playbooks** | Strategy guides | Web |
| **My Learning** | Saved/in-progress content | Mobile, Web |

### 17.3 Content Categories

| Category | Topics |
|----------|--------|
| **Content Creation** | Filming, Editing, Writing, Design |
| **Growth** | Algorithm, Engagement, Virality |
| **Monetization** | Brand deals, Merch, Pricing |
| **Business** | Taxes, Contracts, Legal |
| **Platform-Specific** | Instagram tips, YouTube tips, etc. |
| **Mindset** | Burnout, Consistency, Motivation |

---

## 18. Module 15 — Settings & Preferences

### 18.1 Screens

| Screen | Description | Platform |
|--------|-------------|----------|
| **Settings Home** | All settings categories | Mobile, Web |
| **Account Settings** | Email, password, phone | Mobile, Web |
| **Profile Settings** | Visibility, display options | Mobile, Web |
| **Privacy Settings** | Who can see/contact | Mobile, Web |
| **Notification Settings** | What notifications to receive | Mobile, Web |
| **Connected Accounts** | Manage linked platforms | Mobile, Web |
| **Payment Settings** | Payout methods | Mobile, Web |
| **Security** | 2FA, login activity | Mobile, Web |
| **Data & Storage** | Cache, downloads | Mobile |
| **Language & Region** | Language, timezone | Mobile, Web |
| **Help & Support** | FAQs, contact | Mobile, Web |
| **Legal** | Terms, Privacy Policy | Mobile, Web |
| **About** | Version, credits | Mobile |
| **Delete Account** | Account deletion | Web |

### 18.2 Notification Settings

| Category | Options |
|----------|---------|
| **Engagement** | Likes, Comments, Shares, Follows |
| **Messages** | DMs, Collab requests |
| **Deals** | Applications, Approvals, Payments |
| **Commerce** | Orders, Sales |
| **Community** | Group activity, Mentions |
| **Platform** | Updates, Features, Tips |
| **Delivery Method** | Push, Email, SMS |
| **Quiet Hours** | Do not disturb times |

### 18.3 Privacy Settings

| Setting | Options |
|---------|---------|
| **Profile Visibility** | Public, Private |
| **Activity Status** | Show when online |
| **Read Receipts** | Show when messages read |
| **Allow Messages From** | Everyone, Followers, Verified |
| **Allow Collab Requests From** | Everyone, Followers, Verified |
| **Show in Search** | Yes/No |
| **Show in Suggestions** | Yes/No |
| **Hide Follower Count** | Yes/No |
| **Hide Following List** | Yes/No |

### 18.4 Security Settings

| Setting | Description |
|---------|-------------|
| **Change Password** | Update password |
| **Two-Factor Authentication** | Enable 2FA |
| **Login Activity** | See recent logins |
| **Trusted Devices** | Manage devices |
| **Login Alerts** | Notify on new login |
| **Session Management** | End sessions |

---

## 19. Screen Inventory

### 19.1 Total Screen Count

| Module | Screens |
|--------|---------|
| Onboarding & Identity | 17 |
| Profile & Portfolio | 9 |
| Content Studio | 16 |
| Feed & Discovery | 14 |
| Audience Ownership | 15 |
| Analytics & Intelligence | 13 |
| Job Board & Brand Deals | 14 |
| Merchandise Studio | 20 |
| Art Marketplace | 13 |
| Financial Dashboard | 15 |
| Collaboration Hub | 11 |
| Reputation & Verification | 9 |
| Community & Engagement | 10 |
| Learning & Growth | 10 |
| Settings & Preferences | 14 |
| **TOTAL** | **200** |

### 19.2 Platform Distribution

| Platform | Screen Count |
|----------|--------------|
| **Mobile (iOS + Android)** | 184 (all modules) |
| **Web App** | 144 (optimized for complex tasks) |
| **Web Profile (Public)** | 1 (shareable profile page) |
| **E-commerce Site (Auto-generated)** | 1 (per creator, standalone merch store) |

---

## 20. Epics & User Stories

### EPIC 1 — Creator Onboarding

**US-1.1**: As a new creator, I want to sign up with my Google account so that I can start quickly without remembering another password.

**US-1.2**: As a new creator, I want to select my creator type (musician, artist, etc.) so that the platform shows me relevant content and features.

**US-1.3**: As a new creator, I want to connect my Instagram account during onboarding so that my follower count and content is imported.

**US-1.4**: As a new creator, I want to complete my profile with a bio and portfolio pieces so that I can be discovered by brands and fans.

**US-1.5**: As the system, I want to calculate an initial reputation score based on connected platform data so that creators start with appropriate access.

### EPIC 2 — Portfolio & Professional Presence

**US-2.1**: As a creator, I want to upload my best work to a portfolio section so that visitors see my highest-quality work first.

**US-2.2**: As a creator, I want to set my collaboration status (open to brand deals, available for hire) so that brands know I'm accepting opportunities.

**US-2.3**: As a creator, I want a public profile URL (underdawg.com/myname) so that I can share my profile anywhere like a professional portfolio.

**US-2.4**: As a creator, I want to see analytics on my profile views and link clicks so that I know how discoverable I am.

### EPIC 3 — Content Creation & Publishing

**US-3.1**: As a creator, I want to upload videos and edit them in-app (trim, filter, music) so that I don't need external tools.

**US-3.2**: As a creator, I want to schedule posts for future times so that I can batch my content creation.

**US-3.3**: As a creator, I want to cross-post to my connected Instagram and TikTok accounts so that I publish everywhere from one place.

**US-3.4**: As a creator, I want to save drafts automatically so that I never lose work in progress.

### EPIC 4 — Audience Ownership

**US-4.1**: As a creator, I want to connect all my social platforms so that I see my total audience in one place.

**US-4.2**: As a creator, I want to identify my top fans across platforms so that I know who to focus on.

**US-4.3**: As a creator, I want to build an email list and send newsletters so that I own my audience connection.

**US-4.4**: As a creator, I want a landing page builder so that I can create a link-in-bio page with email signup.

**US-4.5**: As a creator, I want to export my audience data so that I'm never locked into Underdawg.

### EPIC 5 — Analytics & Intelligence

**US-5.1**: As a creator, I want to see unified analytics across all platforms so that I don't check 5 different dashboards.

**US-5.2**: As a creator, I want to see which content performs best so that I can create more of what works.

**US-5.3**: As a creator, I want AI-powered recommendations on best posting times so that I maximize engagement.

**US-5.4**: As a creator, I want to track competitors so that I understand my position in the market.

### EPIC 6 — Brand Deals

**US-6.1**: As a creator, I want to browse brand deal opportunities filtered by my niche and follower count so that I see relevant jobs.

**US-6.2**: As a creator, I want to see market rates for my size so that I don't underprice myself.

**US-6.3**: As a creator, I want to apply to jobs with a proposal and rate so that brands can consider me.

**US-6.4**: As a creator, I want to negotiate deals through chat so that everything is documented.

**US-6.5**: As a creator, I want to sign contracts digitally so that I don't need to print or scan.

**US-6.6**: As a creator, I want to submit deliverables and get paid through the platform so that payments are guaranteed.

### EPIC 7 — Merchandise

**US-7.1**: As a creator, I want to select multiple product types at once so that I can create a full merch line efficiently.

**US-7.2**: As a creator, I want to upload a design and see AI-generated mockups on all my selected products so that I can quickly visualize options.

**US-7.3**: As a creator, I want to connect with a professional designer if I want a custom design so that I have both free and premium options.

**US-7.4**: As a creator, I want to set my profit margin and see the retail price so that I control my earnings.

**US-7.5**: As a creator, I want BOTH an in-app merch store AND a standalone e-commerce website so that I can sell anywhere.

**US-7.6**: As a creator, I want to customize my standalone e-commerce site with my branding so that it feels like my own store.

**US-7.7**: As a creator, I want to track sales from both selling channels so that I understand my commerce performance.

### EPIC 8 — Art Marketplace

**US-8.1**: As an artist, I want to list original artwork and prints for sale so that I can sell directly to collectors.

**US-8.2**: As an artist, I want to accept commission requests so that fans can order custom work.

**US-8.3**: As an artist, I want to manage orders and shipping so that fulfillment is organized.

### EPIC 9 — Financials

**US-9.1**: As a creator, I want to see all my income in one dashboard so that I understand my total earnings.

**US-9.2**: As a creator, I want to withdraw earnings to my bank account so that I get paid.

**US-9.3**: As a creator, I want to generate invoices for brand deals so that I maintain professional records.

**US-9.4**: As a creator, I want tax reports at year-end so that filing is simple.

### EPIC 10 — Reputation & Verification

**US-10.1**: As a creator, I want to get verified so that brands and fans trust me.

**US-10.2**: As a creator, I want to see my reputation score and what affects it so that I can improve.

**US-10.3**: As a creator, I want to earn badges for achievements so that my profile stands out.

**US-10.4**: As a brand, I want to see creator verification and reviews so that I hire reliable partners.

---

## 21. API Architecture

### 21.1 Core APIs

| Endpoint Group | Description |
|----------------|-------------|
| `/api/v1/auth` | Registration, Login, OAuth, Sessions |
| `/api/v1/users` | User profile CRUD |
| `/api/v1/creators` | Creator-specific data, portfolio |
| `/api/v1/content` | Posts, media upload, publishing |
| `/api/v1/feed` | Home feed, explore, recommendations |
| `/api/v1/audience` | Platform connections, audience data |
| `/api/v1/analytics` | All analytics endpoints |
| `/api/v1/jobs` | Job board, applications |
| `/api/v1/deals` | Deal management, contracts |
| `/api/v1/merch` | Merchandise products, orders, stores |
| `/api/v1/ecommerce` | Standalone e-commerce site management |
| `/api/v1/art` | Art marketplace listings |
| `/api/v1/finance` | Earnings, payouts, invoices |
| `/api/v1/messages` | DMs, conversations |
| `/api/v1/notifications` | Push, email, in-app |
| `/api/v1/reputation` | Scores, verification, badges |
| `/api/v1/community` | Groups, events, posts |
| `/api/v1/search` | Global search |
| `/api/v1/settings` | User preferences |
| `/api/v1/ai` | AI mockup generation, recommendations |

### 21.2 External Platform APIs

| Platform | APIs Used |
|----------|-----------|
| **Instagram** | Basic Display API, Insights API |
| **YouTube** | Data API v3, Analytics API |
| **TikTok** | Login Kit, Display API |
| **Twitter** | API v2 |
| **Spotify** | Web API |
| **Twitch** | Helix API |

### 21.3 Third-Party Integrations

| Service | Purpose |
|---------|---------|
| **Razorpay** | Payments, Payouts |
| **AWS S3 + CloudFront** | Media storage + CDN |
| **Firebase** | Push notifications, Auth |
| **SendGrid** | Email delivery |
| **Twilio** | SMS |
| **Stripe** | International payments |
| **Digio** | E-signatures |
| **Sentry** | Error tracking |
| **Mixpanel** | Product analytics |
| **Claude/OpenAI** | AI features, mockup generation, insights |

### 21.4 Webhooks

| Event | Description |
|-------|-------------|
| `content.published` | New content posted |
| `follower.gained` | New follower |
| `deal.status_changed` | Deal status updated |
| `payment.received` | Payment received |
| `order.placed` | Merch/Art order placed |
| `verification.completed` | User verified |
| `merch.site_generated` | E-commerce site created |

---

## 22. Non-Functional Requirements

| Requirement | Target |
|-------------|--------|
| **App Launch** | < 2 seconds (cold), < 1 second (warm) |
| **Feed Load** | < 1 second |
| **Image Upload** | < 5 seconds for 10MB |
| **Video Upload** | < 60 seconds for 500MB |
| **Search Results** | < 500ms |
| **Analytics Load** | < 2 seconds |
| **AI Mockup Generation** | < 10 seconds for 5 products |
| **E-commerce Site Generation** | < 30 seconds |
| **Uptime** | 99.9% |
| **Scale** | 1M creators, 10M content pieces, 100K daily active |
| **Security** | HTTPS, AES-256, OAuth 2.0, 2FA |
| **Data Privacy** | GDPR compliant, data export |
| **Offline** | View cached content, queue posts |
| **Push Delivery** | < 5 seconds |
| **Video Playback** | Adaptive bitrate, < 2 second start |
| **Supported OS** | iOS 14+, Android 8+ |
| **Languages** | English, Hindi (expandable) |
| **Accessibility** | WCAG 2.1 AA |

---

## Final Note

> **Remember:** Underdawg is not a content app. It is a pipeline that turns unknown talent into monetizable assets. We help artists get DISCOVERED, get CONNECTED, and get PAID — all in one place. And we capture value at every stage of that transformation.

---

*Total: **15 Modules** | **200 Screens** | **10 Epics** | **45+ User Stories** | **20 API Groups** | **10 Content Types** | **8 Revenue Streams** | **2 Selling Channels per Creator***

*Every feature in this document serves the creator's journey from unknown talent to professional career. Underdawg doesn't just help creators post content — it helps them own their audience, monetize their talent, and build lasting careers.*

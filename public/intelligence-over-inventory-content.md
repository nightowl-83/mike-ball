# Intelligence Over Inventory

## Project Overview

**Role:** Lead Product Designer  
**Timeline:** 6 months  
**Year:** 2025  
**Focus:** First-Party Data · Product Strategy

A strategic initiative to convert generic 3rd-party listing data into proprietary buyer intent data—powering advanced search filters and seller performance coaching.

---

## /01 The Challenge

### Understanding the Commodity Data Problem

#### The Market Reality
While we maintained a strong core of unique listings, the majority of our traffic was driven by third-party feeds. Because these same base listings appeared on every competing platform, new-to-market products could easily chip away at our traffic by offering similar utility with less overhead.

#### The Insight Gap
We knew people were clicking, but we didn't know why. Our engagement data was surface-level—we could see that a listing was popular, but we couldn't see the specific requirements or 'deal-breakers' that buyers were looking for within the data.

#### The Seller Disconnect
Sellers were receiving vanity metrics like total views and saves. These numbers looked good on a report but offered zero guidance on how to actually close a deal. A seller with 1,000 views and zero leads had no way to know if their price was wrong or if they were missing a key piece of information.

#### Database-First Filtering
Our search filters were limited by the technical constraints of the incoming feeds. We were forcing buyers to search based on how the database was structured, rather than the natural language of land buying (e.g., 'Is there power at the road?' or 'Does it have a well?').

---

## The Idea

> An Account Manager flagged that buyers were reaching out to sellers about 'Owner Financing' and getting no response. It was a clear signal that our listings were missing the very information that drove the final purchase decision.

This sparked the key insight: the leads themselves were a goldmine of first-party data. We weren't listening to our users; we were just counting them.

---

## /02 The Solution

### Building the Data Pipeline

The solution was a closed-loop data intelligence system—parsing lead emails for keywords, mapping them to search filters, and feeding insights back to sellers through the Marketing Hub.

**Flow:**
1. Lead Data → Capture buyer inquiries and engagement signals
2. Keyword Parser → Extract intent keywords from lead messages
3. Intent Mapping → Map keywords to filter categories
4. UI Filters → Surface as advanced search options
5. Seller Training → Provide data for what buyers are searching for

---

## /03 Parsing Tool

### Extracting Buyer Intent from Leads

I wanted a simple tool that would parse leads for keywords and see what our users were asking about.

#### Extracting Buyer Intent
The tool parses thousands of lead emails to identify recurring keywords and phrases. By analyzing what buyers are asking about—financing options, water access, road conditions—we can surface the data gaps that sellers need to fill.

**Key Capabilities:**
- Natural language processing for lead content
- Trend tracking over configurable time periods
- Exportable reports for stakeholder review

#### Regional & Temporal Insights
Understanding that buyer needs vary by region and season, the tool breaks down keyword frequency by geography and time. This allows us to prioritize feature requests and tailor the seller coaching experience to specific markets.

**Key Capabilities:**
- Geographic distribution mapping
- Trend identification
- Priority scoring for product roadmap

---

## /04 Dual-Interface Impact

### How the Data Affected the Buyer & Seller Experience

#### The Seller's 'Aha' Moment
*"We shifted from asking for data to proving its ROI."*

By surfacing buyer intent directly within the listing flow, we transformed a chore into a competitive advantage. We didn't just ask for utility info; we showed sellers that it was their fastest path to a 5x lead increase.

#### Gamifying Quality
*"The Completeness Score became our invisible coach."*

We used gamification to align seller behavior with search engine success. It provided a clear, actionable roadmap for sellers to improve their own visibility without needing a manual support touch-point.

#### Intent-Based Navigation
*"We didn't design filters; we designed answers."*

Using the lead parser, I prioritized a 'Utility First' navigation. We elevated the attributes that our users were most vocal about in their inquiries, drastically reducing the 'pogo-sticking' behavior between the search page and listing details.

In a market flooded with identical 3rd-party listings, our users were struggling to find land that met basic survivability needs—water, power, and road access. This data existed in the leads, but was invisible on the page.

#### Closing the Loop
*"We built a self-correcting data flywheel."*

This created a bridge between two platforms: buyer questions fueled seller prompts, which in turn unlocked the filters buyers needed. The system started learning and improving its own data density.

---

## /05 Strategy & Influence

### How I Used the Data to Shape Product Decisions

#### Lead Volume vs Quality
**Challenging the Initial Direction**

An earlier effort to drive lead volume had unintended consequences. Our initial success created a new problem. By making it easier for buyers to find and contact sellers, we significantly increased lead volume. However, sellers began reporting that the "noise" had also increased. They were spending more time filtering through low-intent inquiries, which created a new form of friction in their workflow.

I had to challenge our team's reliance on "Total Leads" as the primary success metric. While the charts looked great, the user experience for our sellers was actually degrading. I pushed for a move away from simple volume toward Market Comparison and Lead Quality.

#### Challenging the "More is Better" Fallacy
A lead count of five means something very different in remote Idaho than it does in a high-turnover market. To solve this, I shifted our focus from raw volume to relative benchmarking—providing the regional context sellers needed to gauge their actual performance.

By surfacing comparative data, like '+5 leads more than similar listings,' we moved the needle from vanity metrics to actionable market intelligence, showing sellers exactly where they stood against their neighbors.

#### Lead Strength Indicators
We implemented a "Lead Strength" system within the Marketing Hub. Using the same parsing logic from the buyer side, we flagged leads that contained high-intent signals—such as specific move-in timelines or proof of funds.

By pairing parsed keywords with user-submitted lead quality ratings, we could begin to teach the system what 'good' leads actually look like. This feedback loop allowed the model to learn from seller behavior and improve its scoring over time.

#### Data-Informed Coaching (The Marketing Hub)
By shifting our mindset from delivering more leads to delivering quality leads, we challenged how we present data to our users. Instead of a passive listing form, the Hub became a coaching tool. The "Popular Features" section and Property Completeness Score could be used to guide users checking their listings performance as well.

The same messaging, "Water and Electricity are often asked about by buyers. Properties that include this see an average of 5x more leads." could guide users to provide this additional information. This allowed sellers to prioritize their day. We weren't just giving them more work; we were giving them a way to manage it. This shift proved that as a Lead Designer, my responsibility isn't just to the buyer's ease of use, but to the seller's operational efficiency.

---

## Gallery

### Messaging & Treatment Variations
Exploring different approaches to communicate value through various UI treatments, score visualizations, and comparison layouts.

---

## /06 The AI Evolution

### The Future of Proactive Discovery

The next phase integrates machine learning to predict buyer preferences before they search—turning the marketplace from reactive search to proactive discovery.

#### Predictive Matching
ML models predict buyer preferences before they search.

#### Proactive Discovery
Surface listings that match latent intent patterns.

#### Engagement Analytics
Deep analysis of cross-platform behavior signals.

#### Regional Interest Heat Maps
Use keyword data to create heat maps showing regions where different interests are popular—wind farms, crops, minerals, natural gas, and more.

#### Automating Parser Tool
Use the parser tool to automatically identify trends and patterns in user behavior.

---

## /07 Next Project

**Rural Land Marketplace**  
A complete relaunch with modern design, intuitive search, and enhanced map functionality.

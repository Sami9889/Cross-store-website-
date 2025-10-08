"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Shield,
  Zap,
  Globe,
  Users,
  Building,
  Code,
  CheckCircle,
  Scale,
  FileText,
  Lock,
  Server,
  Award,
  Phone,
  Mail,
  ExternalLink,
  Eye,
  UserCheck,
  Gavel,
  BookOpen,
  Download,
  User,
  Layers,
} from "lucide-react"

export default function CrossStoreLanding() {
  const handleLearnMore = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSignIn = () => {
    window.location.href = "/signin"
  }

  const downloadPDF = (documentType: string, filename: string) => {
    let pdfContent = ""
    const companyInfo = `
CrossStore Platform
Cross-Platform Application Distribution
Founded: 2025

Contact Information:
Email: Sami.singh@techie.com
Email: mds@techie.com
Website: crossstore.com

Company Address:
CrossStore Technologies
Innovation District
Tech Hub, Suite 500

-----------------------------------
`

    switch (documentType) {
      case "terms":
        pdfContent = `${companyInfo}
CROSSSTORE TERMS OF SERVICE - 2025

Document Version: 3.2
Last Updated: January 2025
Effective Date: January 1, 2025

CONTACT INFORMATION:
For questions regarding these terms, contact:
- Email: Sami.singh@techie.com
- Email: mds@techie.com
- Legal Department: legal@crossstore.com

1. ACCEPTANCE OF TERMS
By accessing or using CrossStore, you agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you and CrossStore Technologies.

2. DESCRIPTION OF SERVICE
CrossStore is a cross-platform application distribution platform that enables users to run applications across different operating systems through cloud-hosted execution environments and compatibility layers.

Key Features:
- Cross-platform application compatibility
- Cloud-hosted execution environments
- Enterprise-grade security and compliance
- Developer distribution tools
- License management systems

3. USER OBLIGATIONS
Users must comply with all applicable laws and regulations including:
- Proper software licensing and usage rights
- Data protection and privacy regulations
- Intellectual property laws
- Export control regulations

Users are responsible for:
- Maintaining account security and confidentiality
- All activities under their account
- Ensuring authorized use of distributed applications
- Compliance with software licensing terms

4. INTELLECTUAL PROPERTY
All software, content, and materials distributed through CrossStore are protected by intellectual property laws. Users must respect:
- Copyright and trademark rights
- Software licensing agreements
- Developer intellectual property
- Platform proprietary technology

5. SERVICE AVAILABILITY
CrossStore provides services with a 99.9% uptime guarantee. Service may be temporarily unavailable for:
- Scheduled maintenance
- Emergency security updates
- Infrastructure upgrades
- Force majeure events

6. LIMITATION OF LIABILITY
CrossStore's liability is limited to the maximum extent permitted by law. We are not liable for:
- Indirect or consequential damages
- Loss of data or profits
- Service interruptions
- Third-party application issues

7. TERMINATION
Either party may terminate this agreement with 30 days written notice. Upon termination:
- Access to services will be discontinued
- Data export tools will be provided
- Outstanding payments must be settled
- License rights will be revoked

8. DISPUTE RESOLUTION
Disputes will be resolved through:
- Good faith negotiation
- Mediation if necessary
- Binding arbitration
- Applicable jurisdiction laws

9. MODIFICATIONS
CrossStore reserves the right to modify these terms with 30 days notice. Continued use constitutes acceptance of modified terms.

10. GOVERNING LAW
These terms are governed by the laws of the jurisdiction where CrossStore is incorporated.

For support or questions:
Email: Sami.singh@techie.com or mds@techie.com

Last Updated: January 2025
© 2025 CrossStore Technologies. All rights reserved.`
        break
      case "privacy":
        pdfContent = `${companyInfo}
CROSSSTORE PRIVACY POLICY - 2025

Document Version: 2.8
Last Updated: January 2025
Effective Date: January 1, 2025

CONTACT INFORMATION:
Data Protection Officer:
- Email: Sami.singh@techie.com
- Email: mds@techie.com
- Privacy Team: privacy@crossstore.com

1. INFORMATION WE COLLECT

Personal Information:
- Account details (name, email, username)
- Payment information (processed securely)
- Profile information (optional)
- Communication preferences

Technical Information:
- Device and browser information
- IP addresses and location data
- Usage analytics and patterns
- Performance metrics
- Error logs and diagnostics

Application Data:
- Application usage statistics
- License validation data
- Performance metrics
- User preferences

2. HOW WE USE INFORMATION

Service Delivery:
- Provide cross-platform application access
- Manage user accounts and authentication
- Process payments and subscriptions
- Deliver customer support

Platform Improvement:
- Analyze usage patterns
- Optimize performance
- Develop new features
- Enhance security measures

Communication:
- Service updates and notifications
- Security alerts
- Marketing communications (with consent)
- Customer support responses

3. DATA PROTECTION

Security Measures:
- AES-256 encryption at rest
- TLS 1.3 encryption in transit
- Multi-factor authentication
- Regular security audits
- Intrusion detection systems
- Automated threat monitoring

Data Storage:
- SOC 2 Type II certified data centers
- Geographically distributed storage
- Automated backup systems
- Disaster recovery procedures

Access Controls:
- Role-based access control
- Principle of least privilege
- Regular access reviews
- Audit logging

4. DATA SHARING

We do not sell personal data. Limited sharing occurs for:
- Payment processing (PCI-DSS compliant processors)
- Cloud infrastructure providers
- Analytics services (anonymized data)
- Legal compliance requirements

5. YOUR RIGHTS

Access Rights:
- View your personal data
- Request data corrections
- Export your data (JSON/CSV formats)
- Delete your account and data

Control Rights:
- Manage communication preferences
- Control cookie settings
- Opt-out of analytics
- Withdraw consent

6. DATA RETENTION

Personal data is retained:
- During active account period
- 30 days after account closure
- Longer if required by law
- Anonymized data for analytics

7. INTERNATIONAL TRANSFERS

Data may be transferred internationally with appropriate safeguards:
- Standard contractual clauses
- Adequacy decisions
- Privacy Shield frameworks
- User consent where required

8. CHILDREN'S PRIVACY

CrossStore is not intended for users under 13. We do not knowingly collect data from children.

9. COMPLIANCE

CrossStore complies with:
- GDPR (European Union)
- CCPA (California)
- Australian Privacy Principles
- Other applicable data protection laws

10. UPDATES

This policy may be updated with 30 days notice. Material changes require explicit consent.

CONTACT US:
For privacy concerns or data requests:
Email: Sami.singh@techie.com or mds@techie.com
Privacy Portal: privacy.crossstore.com

Last Updated: January 2025
© 2025 CrossStore Technologies. All rights reserved.`
        break
      case "cookie":
        pdfContent = `${companyInfo}
CROSSSTORE COOKIE POLICY - 2025

Document Version: 1.5
Last Updated: January 2025

CONTACT: Sami.singh@techie.com or mds@techie.com

1. WHAT ARE COOKIES

Cookies are small text files stored on your device to enhance user experience and platform functionality.

Types of Data Storage:
- HTTP Cookies
- Local Storage
- Session Storage
- IndexedDB

2. TYPES OF COOKIES WE USE

Essential Cookies (Required):
- Authentication tokens
- Session management
- Security tokens
- Load balancing
- CSRF protection

These cookies are necessary for platform operation and cannot be disabled.

Analytics Cookies (Optional):
- Usage statistics
- Performance monitoring
- Feature adoption tracking
- Error reporting
- User flow analysis

These cookies help us improve our services and can be disabled.

Preference Cookies (Optional):
- Language settings
- Theme preferences
- Display options
- Notification settings

These cookies remember your preferences and can be managed.

3. COOKIE DURATION

Session Cookies:
- Deleted when browser closes
- Used for temporary data
- Authentication sessions

Persistent Cookies:
- Stored for specified duration
- Remember preferences
- Analytics tracking
- Maximum 12 months duration

4. THIRD-PARTY COOKIES

Payment Processing:
- Stripe (payment processing)
- Duration: Session only
- Purpose: Secure transactions

Analytics:
- Usage analytics (anonymized)
- Performance monitoring
- Error tracking

We do not use third-party advertising cookies.

5. MANAGING COOKIES

Browser Controls:
- Chrome: Settings > Privacy > Cookies
- Firefox: Options > Privacy > Cookies
- Safari: Preferences > Privacy
- Edge: Settings > Privacy > Cookies

Platform Controls:
- Privacy Dashboard: crossstore.com/privacy
- Granular cookie management
- Opt-out options
- Export cookie data

6. COOKIE LIST

Essential Cookies:
- auth_token: Authentication (Session)
- csrf_token: Security (Session)
- session_id: Session management (Session)

Analytics Cookies:
- _analytics: Usage tracking (12 months)
- _performance: Performance metrics (6 months)

Preference Cookies:
- theme: Display preference (12 months)
- language: Language setting (12 months)

7. IMPACT OF DISABLING COOKIES

Disabling essential cookies will prevent:
- User authentication
- Account access
- Service functionality

Disabling optional cookies will affect:
- Personalization
- Analytics accuracy
- Feature recommendations

8. UPDATES

This cookie policy may be updated to reflect:
- New cookie types
- Changed purposes
- Regulatory requirements
- Platform updates

9. CONSENT

By using CrossStore, you consent to our use of essential cookies. Optional cookies require explicit consent through our cookie banner.

10. CONTACT

For cookie-related questions:
Email: Sami.singh@techie.com or mds@techie.com
Privacy Team: privacy@crossstore.com

Last Updated: January 2025
© 2025 CrossStore Technologies. All rights reserved.`
        break
      case "developer":
        pdfContent = `${companyInfo}
CROSSSTORE DEVELOPER AGREEMENT - 2025

Document Version: 4.1
Last Updated: December 2024

DEVELOPER CONTACT: Sami.singh@techie.com or mds@techie.com

1. DEVELOPER RESPONSIBILITIES

Application Quality:
- Ensure applications meet platform standards
- Provide accurate descriptions and metadata
- Maintain application compatibility
- Address security vulnerabilities promptly
- Provide user support

Legal Compliance:
- Respect intellectual property rights
- Comply with software licensing terms
- Follow data protection regulations
- Adhere to export control laws
- Maintain proper documentation

2. DISTRIBUTION RIGHTS

License Grant:
- Non-exclusive distribution rights
- Global distribution capability
- Multi-platform deployment
- Version management
- Update distribution

Developer Retains:
- Intellectual property ownership
- Source code rights
- Branding and trademarks
- Direct sales rights
- Alternative distribution channels

3. REVENUE SHARING

Standard Tier:
- 70% to developer
- 30% to CrossStore
- Monthly payments
- Minimum payout: $100

Premium Tier:
- 85% to developer
- 15% to CrossStore
- Weekly payments
- Minimum payout: $50

Enterprise Tier:
- Custom revenue sharing
- Negotiated terms
- Dedicated support
- Priority distribution

4. PAYMENT TERMS

Payment Schedule:
- Standard: Monthly (NET 30)
- Premium: Weekly (NET 7)
- Enterprise: Custom terms

Payment Methods:
- Bank transfer
- PayPal
- Stripe
- Wire transfer

Tax Responsibilities:
- Developers responsible for taxes
- W-9/W-8 forms required
- 1099 reporting (US developers)
- VAT compliance (EU developers)

5. APPLICATION REQUIREMENTS

Technical Standards:
- Compatible with platform APIs
- Proper error handling
- Performance optimization
- Security best practices
- Documentation requirements

Content Standards:
- No malicious code
- No copyright infringement
- No inappropriate content
- Accurate descriptions
- Clear licensing terms

6. SUPPORT OBLIGATIONS

Developer Must Provide:
- Bug fixes and updates
- Security patches
- User documentation
- Technical support
- Compatibility updates

Response Times:
- Critical issues: 24 hours
- Security issues: 48 hours
- General support: 5 business days

7. INTELLECTUAL PROPERTY

Developer Warranties:
- Owns or licenses all IP
- No infringement of third-party rights
- Proper attribution
- Clear licensing terms

CrossStore Rights:
- Platform branding
- Marketing materials
- Distribution technology
- Analytics data

8. COMPLIANCE VERIFICATION

CrossStore May:
- Review application code
- Test functionality
- Verify licensing compliance
- Audit revenue reporting
- Request documentation

9. TERMINATION

Either Party May Terminate:
- With 30 days notice
- For material breach
- For legal violations
- For platform changes

Upon Termination:
- Distribution ceases
- Final payment processed
- Data export provided
- License rights end

10. DEVELOPER SUPPORT

CrossStore Provides:
- Developer documentation
- API access and SDKs
- Analytics dashboard
- Technical support
- Marketing opportunities

Support Channels:
- Email: Sami.singh@techie.com or mds@techie.com
- Developer Portal: developers.crossstore.com
- Documentation: docs.crossstore.com
- Community Forum: community.crossstore.com

11. UPDATES AND MODIFICATIONS

Agreement updates require:
- 30 days advance notice
- Email notification
- Continued distribution implies acceptance

12. DISPUTE RESOLUTION

Process:
- Good faith negotiation
- Mediation if needed
- Binding arbitration
- Applicable law jurisdiction

CONTACT INFORMATION:
Developer Relations: Sami.singh@techie.com or mds@techie.com
Technical Support: dev-support@crossstore.com
Legal Questions: legal@crossstore.com

Last Updated: December 2024
© 2025 CrossStore Technologies. All rights reserved.`
        break
      case "enterprise":
        pdfContent = `${companyInfo}
CROSSSTORE ENTERPRISE LICENSE - 2025

Document Version: 2.5
Last Updated: November 2024

ENTERPRISE CONTACT: Sami.singh@techie.com or mds@techie.com

1. ENTERPRISE SERVICES

Comprehensive Licensing:
- Unlimited user seats
- Multi-location deployment
- Custom integrations
- Dedicated infrastructure
- Priority support

Service Tiers:
- Enterprise Standard
- Enterprise Premium
- Enterprise Ultimate
- Custom Enterprise Solutions

2. SERVICE LEVEL AGREEMENTS

Uptime Guarantee:
- 99.95% uptime (Standard)
- 99.99% uptime (Premium/Ultimate)
- Scheduled maintenance windows
- Emergency maintenance protocols

Performance Metrics:
- Response time < 200ms
- API availability 99.9%
- Support response times (see below)
- Monthly performance reports

3. SUPPORT PROVISIONS

Support Levels:

Standard Enterprise:
- Email support: 24/5
- Response time: 4 hours
- Phone support: Business hours
- Dedicated account manager

Premium Enterprise:
- Email support: 24/7
- Response time: 2 hours
- Phone support: 24/7
- Dedicated technical team
- Quarterly business reviews

Ultimate Enterprise:
- Email support: 24/7
- Response time: 1 hour
- Phone support: 24/7
- On-site support available
- Dedicated infrastructure
- Custom SLA terms

4. LICENSING TERMS

User Licensing:
- Named user licenses
- Concurrent user licenses
- Department licenses
- Organization-wide licenses

Deployment Rights:
- On-premises deployment
- Cloud deployment
- Hybrid deployment
- Multi-region deployment

5. COMPLIANCE AND SECURITY

Security Features:
- SSO/SAML integration
- Active Directory integration
- Custom authentication
- Role-based access control
- Audit logging
- Encryption at rest and in transit

Compliance:
- SOC 2 Type II certified
- ISO 27001 compliant
- GDPR compliant
- HIPAA available (Ultimate)
- Custom compliance requirements

6. DATA MANAGEMENT

Data Residency:
- Choose data center location
- Multi-region replication
- Backup and recovery
- Data export tools

Data Retention:
- Custom retention policies
- Automated archival
- Legal hold capabilities
- Secure data deletion

7. INTEGRATION CAPABILITIES

API Access:
- Full REST API access
- GraphQL API (Premium/Ultimate)
- Webhook support
- Custom integrations
- SDK access

Third-Party Integrations:
- Identity providers
- Monitoring tools
- Ticketing systems
- Analytics platforms
- Custom connectors

8. TRAINING AND ONBOARDING

Included Services:
- Initial setup and configuration
- Administrator training
- User training materials
- Documentation access
- Best practices consultation

Premium/Ultimate Additional:
- On-site training
- Custom training programs
- Certification programs
- Ongoing education

9. PRICING AND BILLING

Pricing Models:
- Annual subscription
- Multi-year discounts
- Usage-based pricing
- Custom pricing

Billing Terms:
- Annual prepayment
- Quarterly payments available
- Invoice payment (NET 30)
- Purchase order support

10. CONTRACT TERMS

Contract Duration:
- Minimum 1 year
- Auto-renewal options
- Multi-year discounts
- Custom terms available

Termination:
- 90 days notice required
- Data export assistance
- Transition support
- Prorated refunds (if applicable)

11. PROFESSIONAL SERVICES

Available Services:
- Custom development
- Integration services
- Migration assistance
- Performance optimization
- Security audits

Pricing:
- Hourly rates
- Project-based pricing
- Retainer agreements
- Included hours (Ultimate)

12. REPORTING AND ANALYTICS

Standard Reports:
- Usage statistics
- Performance metrics
- Security reports
- Compliance reports

Custom Reports:
- Custom dashboards
- Automated reporting
- Data exports
- API access to analytics

13. DISASTER RECOVERY

Backup Services:
- Daily automated backups
- Point-in-time recovery
- Geographic redundancy
- Recovery time objective: 4 hours
- Recovery point objective: 1 hour

Business Continuity:
- Failover capabilities
- Disaster recovery testing
- Incident response plan
- Communication protocols

14. ACCOUNT MANAGEMENT

Dedicated Support:
- Account manager
- Technical account manager (Premium/Ultimate)
- Quarterly business reviews
- Annual strategic planning

Escalation Process:
- Defined escalation paths
- Executive escalation available
- 24/7 emergency contacts

CONTACT INFORMATION:
Enterprise Sales: Sami.singh@techie.com or mds@techie.com
Enterprise Support: enterprise@crossstore.com
Account Management: accounts@crossstore.com

For custom enterprise solutions or questions:
Email: Sami.singh@techie.com or mds@techie.com

Last Updated: November 2024
© 2025 CrossStore Technologies. All rights reserved.`
        break
      case "compliance":
        pdfContent = `${companyInfo}
CROSSSTORE COMPLIANCE GUIDE - 2025

Document Version: 3.0
Last Updated: January 2025

COMPLIANCE CONTACT: Sami.singh@techie.com or mds@techie.com

1. REGULATORY COMPLIANCE

International Standards:
- ISO 27001:2022 Information Security
- SOC 2 Type II Compliance
- GDPR (European Union)
- CCPA (California)
- Australian Privacy Act 1988
- Canadian PIPEDA

Industry-Specific:
- HIPAA (Healthcare - Ultimate tier)
- PCI-DSS (Payment processing)
- FERPA (Education)
- FedRAMP (Government - in progress)

2. DATA PROTECTION COMPLIANCE

GDPR Compliance:
- Lawful basis for processing
- Data minimization
- Purpose limitation
- Storage limitation
- Data subject rights
- Data protection by design
- Data breach notification (72 hours)

CCPA Compliance:
- Consumer rights to know
- Right to deletion
- Right to opt-out
- Non-discrimination
- Privacy notice requirements

Australian Privacy Principles:
- Open and transparent management
- Anonymity and pseudonymity
- Collection of solicited information
- Data quality and security
- Access and correction rights

3. DMCA PROCEDURES

Copyright Protection:
- Designated DMCA agent
- Takedown request process
- Counter-notification procedures
- Repeat infringer policy

DMCA Agent Contact:
Email: Sami.singh@techie.com or mds@techie.com
DMCA Team: dmca@crossstore.com

Takedown Process:
1. Submit written notice
2. Include required information
3. 24-hour acknowledgment
4. Investigation (48-72 hours)
5. Action or response
6. Counter-notification option

Required Information:
- Identification of copyrighted work
- Location of infringing material
- Contact information
- Good faith statement
- Accuracy statement
- Physical or electronic signature

4. INTELLECTUAL PROPERTY PROTECTION

Developer IP Protection:
- Code signing and verification
- DRM implementation
- License validation
- Usage monitoring
- Infringement detection

Platform IP Protection:
- Trademark protection
- Patent portfolio
- Trade secret protection
- Copyright registration

5. SOFTWARE LICENSING COMPLIANCE

Apple EULA Compliance:
- Genuine Apple hardware
- Authorized macOS usage
- Per-user licensing
- Audit trail maintenance
- Regular compliance reviews

Microsoft Licensing:
- Volume licensing agreements
- Per-user/per-device licensing
- License mobility
- Compliance verification
- Regular audits

Third-Party Software:
- License tracking
- Compliance verification
- Usage monitoring
- Renewal management

6. SECURITY COMPLIANCE

Security Standards:
- ISO 27001 certified
- SOC 2 Type II audited
- Regular penetration testing
- Vulnerability assessments
- Security incident response

Security Controls:
- Access control
- Encryption (AES-256)
- Network security
- Application security
- Physical security
- Personnel security

7. AUDIT AND REPORTING

Internal Audits:
- Quarterly compliance reviews
- Annual security audits
- Continuous monitoring
- Risk assessments

External Audits:
- Annual SOC 2 audit
- ISO 27001 surveillance audits
- Customer-requested audits
- Regulatory audits

Reporting:
- Compliance dashboards
- Audit reports
- Incident reports
- Regulatory filings

8. INCIDENT RESPONSE

Data Breach Response:
- Detection and containment
- Investigation
- Notification (72 hours for GDPR)
- Remediation
- Post-incident review

Incident Categories:
- Security incidents
- Privacy incidents
- Compliance violations
- Service disruptions

Notification Requirements:
- Regulatory authorities
- Affected individuals
- Business partners
- Law enforcement (if required)

9. VENDOR MANAGEMENT

Third-Party Compliance:
- Vendor risk assessments
- Due diligence
- Contract requirements
- Ongoing monitoring
- Annual reviews

Vendor Requirements:
- Security certifications
- Privacy compliance
- Insurance requirements
- Audit rights
- Incident notification

10. EMPLOYEE COMPLIANCE

Training Requirements:
- Security awareness training
- Privacy training
- Compliance training
- Role-specific training
- Annual refresher training

Background Checks:
- Pre-employment screening
- Ongoing monitoring
- Access reviews
- Separation procedures

11. INTERNATIONAL LAW ADHERENCE

Export Controls:
- EAR compliance
- ITAR compliance (if applicable)
- Sanctions screening
- Export documentation

Cross-Border Data Transfers:
- Standard contractual clauses
- Adequacy decisions
- Binding corporate rules
- Consent mechanisms

Jurisdictional Compliance:
- Local data protection laws
- Consumer protection laws
- Telecommunications regulations
- Industry-specific regulations

12. REPORTING PROCEDURES

Compliance Violations:
- Internal reporting channels
- Anonymous reporting option
- Non-retaliation policy
- Investigation process

Report To:
Email: Sami.singh@techie.com or mds@techie.com
Compliance Hotline: compliance@crossstore.com
Anonymous Portal: report.crossstore.com

Investigation Process:
1. Report received
2. Initial assessment (24 hours)
3. Investigation
4. Resolution
5. Follow-up actions
6. Reporting to authorities (if required)

13. DOCUMENTATION

Required Documentation:
- Policies and procedures
- Risk assessments
- Audit reports
- Training records
- Incident reports
- Vendor agreements

Document Retention:
- Active records: Immediate access
- Archived records: 7 years
- Legal hold: Indefinite
- Secure destruction after retention

14. CONTINUOUS IMPROVEMENT

Compliance Program:
- Regular policy reviews
- Control effectiveness testing
- Gap assessments
- Remediation tracking
- Metrics and KPIs

Updates and Changes:
- Regulatory monitoring
- Impact assessments
- Implementation planning
- Communication
- Training updates

CONTACT INFORMATION:
Compliance Officer: Sami.singh@techie.com or mds@techie.com
Compliance Team: compliance@crossstore.com
Legal Department: legal@crossstore.com
Security Team: security@crossstore.com

For compliance questions or to report violations:
Email: Sami.singh@techie.com or mds@techie.com
Compliance Portal: compliance.crossstore.com

Last Updated: January 2025
© 2025 CrossStore Technologies. All rights reserved.`
        break
    }

    // Create and download the PDF-like text file
    const blob = new Blob([pdfContent], { type: "text/plain" })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-background border-b border-border py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Layers className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <span className="text-2xl font-bold text-foreground tracking-tight">CrossStore</span>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={handleSignIn} className="bg-transparent">
              Sign In
            </Button>
          </div>
        </div>
      </div>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />

        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto py-32">
          <div className="mb-12">
            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black text-foreground mb-6 leading-none tracking-tighter">
              CROSSSTORE
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-muted-foreground" />
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium tracking-wide">
                CROSS-PLATFORM SOLUTIONS
              </p>
              <div className="h-px w-16 bg-muted-foreground" />
            </div>
          </div>

          <p className="text-2xl sm:text-3xl text-foreground/80 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Next-generation platform for seamless application distribution across all operating systems
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-semibold"
              onClick={handleLearnMore}
            >
              Explore Platform
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
          </div>

          <div className="mt-24 text-sm text-muted-foreground">
            <p>Scroll to discover more</p>
            <div className="mt-4 mx-auto w-px h-16 bg-gradient-to-b from-muted-foreground to-transparent" />
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="border-b-2 border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">CrossStore</span>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                How It Works
              </a>
              <a href="#company" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Company
              </a>
              <a href="#legal" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Legal
              </a>
              <a href="#privacy" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Privacy
              </a>
              <Button variant="outline" size="lg" onClick={handleSignIn} className="px-6 bg-transparent">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {/* Removed the old hero section as it's replaced by the new one above */}

      {/* Features Section */}
      <section id="features" className="py-32 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">Platform Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built for developers, enterprises, and power users who demand seamless cross-platform compatibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-border bg-card hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground mb-4">Platform Technology</CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  Working on cross-platform compatibility solutions. Focus on performance optimization and system
                  integration.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-border bg-card hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground mb-4">Development Focus</CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  Researching licensing requirements and compliance standards. Security and privacy are core priorities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-border bg-card hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground mb-4">Project Status</CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  Early development phase. Building foundational architecture and exploring technical possibilities.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">How CrossStore Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Three simple steps to access any application on any operating system.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Choose Your App</h3>
              <p className="text-muted-foreground text-pretty">
                Browse our extensive catalog of Windows and macOS applications. Filter by category, compatibility, and
                licensing type.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Instant Deployment</h3>
              <p className="text-muted-foreground text-pretty">
                Our platform automatically detects your OS and provisions the optimal execution environment - native or
                cloud-hosted.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Run Anywhere</h3>
              <p className="text-muted-foreground text-pretty">
                Launch applications seamlessly with full functionality, performance optimization, and enterprise-grade
                security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Built for Everyone</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-foreground">Developers</CardTitle>
                <CardDescription>
                  Distribute your applications across all platforms with our comprehensive SDK and developer tools.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Cross-platform packaging tools
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Real-time analytics dashboard
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Revenue optimization tools
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-foreground">Enterprises</CardTitle>
                <CardDescription>
                  Manage software deployment across mixed OS environments with enterprise-grade controls and compliance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Bulk license management
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Usage analytics & reporting
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    24/7 technical support
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-foreground">Power Users</CardTitle>
                <CardDescription>
                  Access specialized applications regardless of your operating system. Perfect for creative
                  professionals and researchers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Instant app access
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Performance optimization
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Flexible subscription plans
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">About CrossStore</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Founded in 2025, CrossStore represents the next generation of cross-platform application distribution
              technology, revolutionizing how software operates across different operating systems.
            </p>
          </div>

          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <Card className="border-2 border-black p-8 text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-black" />
                <h3 className="text-xl font-bold mb-4">Security First</h3>
                <p className="text-muted-foreground">
                  Every application runs in isolated, encrypted environments with enterprise-grade security protocols
                  and continuous monitoring.
                </p>
              </Card>
              <Card className="border-2 border-black p-8 text-center">
                <Globe className="w-12 h-12 mx-auto mb-4 text-black" />
                <h3 className="text-xl font-bold mb-4">Global Infrastructure</h3>
                <p className="text-muted-foreground">
                  Distributed data centers across 15+ countries ensure low latency and high availability for users
                  worldwide.
                </p>
              </Card>
              <Card className="border-2 border-black p-8 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-black" />
                <h3 className="text-xl font-bold mb-4">Developer Focused</h3>
                <p className="text-muted-foreground">
                  Comprehensive APIs, SDKs, and developer tools make it easy to integrate and distribute applications
                  across platforms.
                </p>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8">Company History & Innovation</h3>
              <div className="space-y-8">
                <div className="border-l-4 border-black pl-6">
                  <h4 className="font-bold text-lg text-foreground mb-2">Q1 2025 - Project Start</h4>
                  <p className="text-muted-foreground mb-4">
                    CrossStore project initiated. Research phase focusing on cross-platform compatibility challenges and
                    potential solutions.
                  </p>
                </div>
                <div className="border-l-4 border-black pl-6">
                  <h4 className="font-bold text-lg text-foreground mb-2">Q2 2025 - Development Phase</h4>
                  <p className="text-muted-foreground mb-4">
                    Core development work in progress. Exploring technical approaches and building prototype systems.
                  </p>
                </div>
                <div className="border-l-4 border-black pl-6">
                  <h4 className="font-bold text-lg text-foreground mb-2">Q3 2025 - Testing & Refinement</h4>
                  <p className="text-muted-foreground mb-4">
                    Planned testing phase for initial prototypes. Focus on stability and performance optimization.
                  </p>
                </div>
                <div className="border-l-4 border-black pl-6">
                  <h4 className="font-bold text-lg text-foreground mb-2">Q4 2025 - Beta Release</h4>
                  <p className="text-muted-foreground mb-4">
                    Target for limited beta release. Gathering feedback and iterating on core functionality.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8">Technology Architecture</h3>
              <div className="space-y-6">
                <Card className="border-2 border-black p-6">
                  <h4 className="font-bold text-lg mb-3">Cloud-Hosted Execution</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Proprietary virtual machine technology running on Apple-certified hardware for macOS applications
                    and Microsoft-licensed infrastructure for Windows applications.
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                    99.9% Uptime Guarantee
                  </div>
                </Card>
                <Card className="border-2 border-black p-6">
                  <h4 className="font-bold text-lg mb-3">Advanced DRM & Licensing</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Multi-layered digital rights management with real-time license validation, usage tracking, and
                    automated compliance reporting.
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Shield className="w-4 h-4 mr-2 text-blue-600" />
                    Enterprise-Grade Security
                  </div>
                </Card>
                <Card className="border-2 border-black p-6">
                  <h4 className="font-bold text-lg mb-3">Global CDN Network</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Distributed content delivery network with edge computing capabilities for optimal performance and
                    reduced latency worldwide.
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Globe className="w-4 h-4 mr-2 text-purple-600" />
                    15+ Global Data Centers
                  </div>
                </Card>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-2 border-black text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">2025</div>
              <div className="text-sm text-muted-foreground font-semibold">Year Founded</div>
            </Card>
            <Card className="border-2 border-black text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">500K+</div>
              <div className="text-sm text-muted-foreground font-semibold">Applications Distributed</div>
            </Card>
            <Card className="border-2 border-black text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground font-semibold">Countries Served</div>
            </Card>
            <Card className="border-2 border-black text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground font-semibold">Uptime Guarantee</div>
            </Card>
          </div>

          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-foreground mb-12">Leadership & Culture</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 border-black p-6 text-center">
                <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">Executive Leadership</h4>
                <p className="text-muted-foreground text-sm">
                  Former executives from Apple, Microsoft, and Google leading our vision for cross-platform innovation.
                </p>
              </Card>
              <Card className="border-2 border-black p-6 text-center">
                <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">Engineering Excellence</h4>
                <p className="text-muted-foreground text-sm">
                  World-class engineering team with expertise in virtualization, cloud computing, and enterprise
                  software.
                </p>
              </Card>
              <Card className="border-2 border-black p-6 text-center">
                <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">Legal & Compliance</h4>
                <p className="text-muted-foreground text-sm">
                  Dedicated legal team ensuring full compliance with international software licensing and data
                  protection laws.
                </p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-8">Project Goals</h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                CrossStore aims to explore cross-platform compatibility solutions while maintaining proper licensing
                compliance. This is an experimental project focused on technical innovation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-black rounded-full mx-auto mb-3 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Compliance Research</h4>
                  <p className="text-sm text-muted-foreground">Studying licensing requirements and legal frameworks</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-black rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Security Focus</h4>
                  <p className="text-sm text-muted-foreground">Building with security and privacy as core principles</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-black rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">User Experience</h4>
                  <p className="text-sm text-muted-foreground">Focusing on intuitive design and smooth performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Technical Architecture</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              CrossStore is built on a fully integrated cross-platform application distribution and execution platform
              with three primary components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">Client Application</CardTitle>
                <CardDescription>
                  Developed in C++ using Qt framework for cross-platform compatibility. Handles OS detection, secure
                  downloads, and application execution with licensing validation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">Backend Infrastructure</CardTitle>
                <CardDescription>
                  Multiple interconnected services including distribution servers, authentication systems, DRM servers,
                  and cloud VM controllers with end-to-end encryption.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">Cloud Execution</CardTitle>
                <CardDescription>
                  Legally compliant macOS and Windows virtual machines on certified hardware. Ephemeral, isolated
                  instances with verified user accounts and automatic termination.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Execution Workflow</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                  1
                </div>
                <h4 className="font-semibold text-foreground mb-2">OS Detection</h4>
                <p className="text-sm text-muted-foreground">
                  Client detects operating system and queries backend for compatible applications
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                  2
                </div>
                <h4 className="font-semibold text-foreground mb-2">License Validation</h4>
                <p className="text-sm text-muted-foreground">
                  Verify subscription tier, license validity, and developer permissions before execution
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                  3
                </div>
                <h4 className="font-semibold text-foreground mb-2">Environment Provisioning</h4>
                <p className="text-sm text-muted-foreground">
                  Native execution or cloud-hosted VM allocation based on compatibility requirements
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                  4
                </div>
                <h4 className="font-semibold text-foreground mb-2">Secure Execution</h4>
                <p className="text-sm text-muted-foreground">
                  Real-time streaming or local execution with continuous monitoring and logging
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="privacy" className="py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Privacy & Data Protection
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Your privacy is our priority. We maintain the highest standards of data protection and transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-border p-8">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground mb-4">Privacy Policy (2025)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Data Collection</h4>
                  <p className="text-sm text-muted-foreground">
                    We collect only essential data required for service operation: account information, usage analytics,
                    and technical logs. No personal data is shared with third parties without explicit consent.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Data Storage & Security</h4>
                  <p className="text-sm text-muted-foreground">
                    All data is encrypted at rest using AES-256 encryption and in transit using TLS 1.3. Data is stored
                    in geographically distributed, SOC 2 Type II certified data centers.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">User Rights</h4>
                  <p className="text-sm text-muted-foreground">
                    Users have full rights to access, modify, export, or delete their personal data. Data portability is
                    supported in standard formats (JSON, CSV).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Retention Policy</h4>
                  <p className="text-sm text-muted-foreground">
                    Personal data is retained only as long as necessary for service provision. Account data is deleted
                    within 30 days of account closure.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border p-8">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <UserCheck className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl text-foreground mb-4">Cookie Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Essential Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Required for authentication, session management, and security. These cannot be disabled without
                    affecting core functionality.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Analytics Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Used to understand user behavior and improve our services. These are optional and can be disabled in
                    your privacy settings.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Third-Party Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    We do not use third-party advertising cookies. Payment processing cookies are used only during
                    transactions and are immediately cleared.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Cookie Management</h4>
                  <p className="text-sm text-muted-foreground">
                    Users can manage cookie preferences through our privacy dashboard or browser settings. Granular
                    controls are available for all non-essential cookies.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">GDPR Compliant</h4>
              <p className="text-sm text-muted-foreground">Full compliance with European data protection regulations</p>
            </Card>
            <Card className="border-border text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">CCPA Compliant</h4>
              <p className="text-sm text-muted-foreground">
                California Consumer Privacy Act compliance and user rights
              </p>
            </Card>
            <Card className="border-border text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">SOC 2 Type II</h4>
              <p className="text-sm text-muted-foreground">Independently audited security and availability controls</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="legal" className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Legal Framework & Compliance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              CrossStore operates under comprehensive legal frameworks ensuring full compliance with international
              software licensing and data protection laws.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-border p-8">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Gavel className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground mb-4">Terms of Service (2025)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Service Agreement</h4>
                  <p className="text-sm text-muted-foreground">
                    By using CrossStore, users agree to our terms of service, which include acceptable use policies,
                    service availability commitments, and user responsibilities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Intellectual Property</h4>
                  <p className="text-sm text-muted-foreground">
                    All applications distributed through CrossStore maintain their original licensing terms. We do not
                    claim ownership of third-party software and ensure proper attribution.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Liability & Indemnification</h4>
                  <p className="text-sm text-muted-foreground">
                    CrossStore provides services "as is" with appropriate liability limitations. Users indemnify
                    CrossStore against misuse of distributed applications.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Termination</h4>
                  <p className="text-sm text-muted-foreground">
                    Either party may terminate the agreement with 30 days notice. Data export tools are provided during
                    the termination period.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border p-8">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl text-foreground mb-4">Software Licensing Compliance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Apple EULA Compliance</h4>
                  <p className="text-sm text-muted-foreground">
                    macOS applications run on genuine Apple hardware in our cloud infrastructure, ensuring full
                    compliance with Apple's End User License Agreement.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Microsoft Licensing</h4>
                  <p className="text-sm text-muted-foreground">
                    Windows applications are distributed and executed in accordance with Microsoft's software licensing
                    terms and volume licensing agreements.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Developer Agreements</h4>
                  <p className="text-sm text-muted-foreground">
                    All developers must agree to our distribution terms, which include compliance verification, revenue
                    sharing, and intellectual property protection.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Enterprise Licensing</h4>
                  <p className="text-sm text-muted-foreground">
                    Enterprise customers receive comprehensive licensing documentation and compliance reporting for
                    audit purposes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Legal Documentation & Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-background rounded-lg border border-border">
                <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Privacy Policy</h4>
                <p className="text-xs text-muted-foreground mb-3">
                  Comprehensive data protection and privacy practices
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Download PDF
                </Button>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border border-border">
                <Scale className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Terms of Service</h4>
                <p className="text-xs text-muted-foreground mb-3">Complete terms and conditions of service</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Download PDF
                </Button>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border border-border">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Compliance Report</h4>
                <p className="text-xs text-muted-foreground mb-3">Annual compliance and security audit results</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Download PDF
                </Button>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border border-border">
                <Building className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Enterprise Agreement</h4>
                <p className="text-xs text-muted-foreground mb-3">Template enterprise licensing agreement</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Download PDF
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Legal Support & Contact</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              For legal inquiries, compliance questions, or enterprise licensing discussions, our legal team is
              available to assist you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-background rounded-lg border border-border">
                <Mail className="w-6 h-6 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Legal Department</h4>
                <p className="text-sm text-muted-foreground">legal@crossstore.com</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border border-border">
                <Phone className="w-6 h-6 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Compliance Hotline</h4>
                <p className="text-sm text-muted-foreground">+1-800-CROSSSTORE</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border border-border">
                <ExternalLink className="w-6 h-6 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Legal Portal</h4>
                <p className="text-sm text-muted-foreground">legal.crossstore.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Portal Section */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground mb-8">Legal Portal</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Access comprehensive legal documentation, policies, and compliance information for the CrossStore
              platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 hover:shadow-lg transition-shadow border-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Terms of Service</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Comprehensive terms governing the use of CrossStore platform, including user obligations, service
                limitations, and liability provisions.
              </p>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => downloadPDF("terms", "CrossStore-Terms-of-Service-2025.pdf")}
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Privacy Policy</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Detailed privacy policy covering data collection, processing, storage, and user rights under GDPR, CCPA,
                and Australian Privacy Principles.
              </p>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => downloadPDF("privacy", "CrossStore-Privacy-Policy-2025.pdf")}
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Cookie Policy</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Information about cookies, tracking technologies, and user consent management across the CrossStore
                platform.
              </p>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => downloadPDF("cookie", "CrossStore-Cookie-Policy-2025.pdf")}
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
                  <UserCheck className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Developer Agreement</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Legal framework for developers publishing applications on CrossStore, including revenue sharing,
                compliance requirements, and intellectual property protection.
              </p>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => downloadPDF("developer", "CrossStore-Developer-Agreement-2025.pdf")}
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
                  <Building className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Enterprise License</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Enterprise licensing terms, service level agreements, support provisions, and compliance requirements
                for business customers.
              </p>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => downloadPDF("enterprise", "CrossStore-Enterprise-License-2025.pdf")}
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Compliance Center</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Regulatory compliance documentation including DMCA procedures, intellectual property protection, and
                international law adherence.
              </p>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => downloadPDF("compliance", "CrossStore-Compliance-Guide-2025.pdf")}
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </Card>
          </div>

          <div className="bg-card border-2 border-border rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Legal Document Archive</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">Current Documents (2025)</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Terms of Service v3.2 (Updated January 2025)</p>
                  <p>• Privacy Policy v2.8 (Updated January 2025)</p>
                  <p>• Developer Agreement v4.1 (Updated December 2024)</p>
                  <p>• Enterprise License v2.5 (Updated November 2024)</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">Compliance Certifications</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>• ISO 27001:2022 Information Security</p>
                  <p>• SOC 2 Type II Compliance</p>
                  <p>• GDPR Article 28 Data Processing</p>
                  <p>• Australian Privacy Act 1988 Compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Interested in CrossStore?</h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Follow our development progress and learn more about the CrossStore project.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" variant="secondary" className="px-10 py-4 text-lg" onClick={handleLearnMore}>
              Explore Platform
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Layers className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-2xl font-bold text-foreground">CrossStore</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                CrossStore is an experimental cross-platform application platform project. Currently in development
                phase. Founded 2025.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-6 text-lg">Product</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-foreground transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#company" className="hover:text-foreground transition-colors">
                    Enterprise
                  </a>
                </li>
                <li>
                  <a href="#company" className="hover:text-foreground transition-colors">
                    Developers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-6 text-lg">Company</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a href="#company" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#company" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#company" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="mailto:Sami.singh@techie.com" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-6 text-lg">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email Support</p>
                    <a
                      href="mailto:Sami.singh@techie.com"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      Sami.singh@techie.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">General Inquiries</p>
                    <a href="mailto:mds@techie.com" className="text-foreground hover:text-primary transition-colors">
                      mds@techie.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t-2 border-border mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-center md:text-left">
                © 2025 CrossStore Technologies. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <a href="#privacy" className="hover:text-foreground transition-colors">
                  Privacy
                </a>
                <a href="#legal" className="hover:text-foreground transition-colors">
                  Terms
                </a>
                <a href="#legal" className="hover:text-foreground transition-colors">
                  Legal
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

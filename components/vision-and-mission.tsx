import { Zap, Shield, Smartphone, Globe, BarChart, Layers } from "lucide-react"

export default function ResponsiveFeatureShowcase() {
    const features = [
        {
            icon: <Zap className="h-6 w-6" />,
            title: "Lightning Fast",
            description: "Optimized performance ensures your application runs smoothly across all devices.",
        },
        {
            icon: <Shield className="h-6 w-6" />,
            title: "Secure by Default",
            description: "Built-in security features protect your data and users from common vulnerabilities.",
        },
        {
            icon: <Smartphone className="h-6 w-6" />,
            title: "Mobile Optimized",
            description: "Responsive design ensures a perfect experience on phones, tablets, and desktops.",
        },
        {
            icon: <Globe className="h-6 w-6" />,
            title: "Global Reach",
            description: "Edge-optimized delivery ensures fast loading times for users around the world.",
        },
        {
            icon: <BarChart className="h-6 w-6" />,
            title: "Analytics Built-in",
            description: "Comprehensive analytics help you understand user behavior and optimize accordingly.",
        },
        {
            icon: <Layers className="h-6 w-6" />,
            title: "Modular Architecture",
            description: "Flexible, component-based structure makes customization and scaling simple.",
        },
    ]

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                {/* Responsive header with different text sizes based on screen width */}
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features</h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-base lg:text-lg">
                            Our platform provides everything you need to build and scale your applications.
                        </p>
                    </div>
                </div>

                {/* Responsive grid that changes from 1 column on mobile to 2 on tablets and 3 on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col p-6 space-y-4 rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md"
                        >
                            <div className="p-2 rounded-full w-10 h-10 flex items-center justify-center bg-primary/10 text-primary">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Responsive CTA section with different layouts on mobile vs desktop */}
                <div className="mt-16 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 p-6 md:p-8 rounded-lg bg-muted">
                    <div className="text-center md:text-left space-y-2 md:max-w-[60%]">
                        <h3 className="text-xl md:text-2xl font-bold">Ready to get started?</h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                            Join thousands of satisfied customers building with our platform.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1">
                            Get Started
                        </button>
                        <button className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}


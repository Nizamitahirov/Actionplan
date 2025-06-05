document.addEventListener('DOMContentLoaded', () => {
    const projectData = [
        // ... (Əvvəlki cavabdakı bütün projectData eyni qalır) ...
        // Məsələn:
        {
            stream: "Store Managers Performance Evaluation and Career Planning Tool",
            objective: "Creating a streamlined system for evaluating store managers' performance and career planning, fostering leadership growth, professional development, and alignment with organizational objectives.",
            actions: [
                { name: "Define sources", status: "Done" },
                { name: "Connections and get data", status: "Done" },
                { name: "Measurement", status: "Done" },
                { name: "Dashboard", status: "Done" },
                { name: "Test and Publish", status: "Done" }
            ],
            overallStatus: "Done"
        },
        {
            stream: "Headcount Planning - Productivity",
            objective: "Optimizing workforce productivity by implementing a planning system that ensures efficient allocation and utilization of headcount, aligning staffing with business needs.",
            actions: [
                { name: "Connect Sales Data", status: "Done" },
                { name: "Connect Turnover Data", status: "Done" },
                { name: "Measurement", status: "Done" },
                { name: "2025 S, P, H Forecast", status: "Done" },
                { name: "Test and Publish", status: "In Progress" }
            ],
            overallStatus: "In Progress"
        },
        {
            stream: "LMS - Learning Management System",
            objective: "Providing a scalable platform to deliver and track employee learning programs.",
            actions: [
                { name: "Define Needs", status: "Done" },
                { name: "Training Part Discussion", status: "Done" },
                { name: "Communication Part", status: "Done" },
                { name: "Implementation Agreement", status: "Not Started" },
                { name: "Server and Domen", status: "Done" },
                { name: "Testing and validation", status: "Not Started" }
            ],
            overallStatus: "In Progress"
        },
        {
            stream: "Headcount Project - Store, DC and HO",
            objective: "Streamlining headcount planning across stores, DC, and head office for efficiency.",
            actions: [
                { name: "Project needs", status: "Done" },
                { name: "Internal Server", status: "Done" },
                { name: "Design", status: "Done" },
                { name: "Deployment", status: "Done" },
                { name: "Testing and Bug fixing", status: "In Progress" },
                { name: "Publish and Access Mng", status: "Not Started" }
            ],
            overallStatus: "In Progress"
        },
        {
            stream: "Working Schedules",
            objective: "Improving employee scheduling to ensure effective workforce management.",
            actions: [
                { name: "Project needs", status: "Done" },
                { name: "Internal Server", status: "Done" },
                { name: "Design", status: "Done" },
                { name: "Deployment", status: "Done" },
                { name: "Testing and Bug fixing", status: "Done" },
                { name: "Publish and Access Mng", status: "Not Started" }
            ],
            overallStatus: "In Progress"
        },
        {
            stream: "ER Request Application",
            objective: "Enabling efficient management of employee relations requests with a digital tool.",
            actions: [
                { name: "Define Needs", status: "Done" },
                { name: "Database", status: "Done" },
                { name: "Design", status: "Done" },
                { name: "Workflows - PA", status: "Done" },
                { name: "Access Management", status: "Done" },
                { name: "Testing and Publish", status: "Not Started" }
            ],
            overallStatus: "In Progress"
        },
        {
            stream: "Performance Management HO",
            objective: "Enhancing HO employee performance through a structured evaluation system.",
            actions: [
                { name: "Define Needs", status: "Done" },
                { name: "Database - Sharepoint, PA", status: "Done" },
                { name: "Test and Publish", status: "Not Started" }
            ],
            overallStatus: "In Progress"
        },
        {
            stream: "Uniform Distribution Application",
            objective: "Streamlining uniform allocation and distribution through a centralized tool.",
            actions: [
                { name: "Define Needs", status: "Done" },
                { name: "Database", status: "Done" },
                { name: "Design", status: "Done" },
                { name: "Workflows - PA", status: "Done" },
                { name: "Access Management", status: "Done" },
                { name: "Testing and Publish", status: "In Progress" }
            ],
            overallStatus: "In Progress"
        },
        {
            stream: "Project Learning Notes",
            objective: "Facilitating knowledge-sharing by capturing and using project learnings.",
            actions: [],
            overallStatus: "In Progress"
        },
        {
            stream: "Org Chart Management - Web Based",
            objective: "Managing organizational charts dynamically with a web-based tool.",
            actions: [],
            overallStatus: "In Progress"
        },
        {
            stream: "Planogram QR",
            objective: "Simplifying planogram access and compliance with QR-based solutions.",
            actions: [],
            overallStatus: "Done"
        },
        {
            stream: "Encashment Tool - Web Based",
            objective: "Streamlining encashment processes with a secure web-based tool.",
            actions: [],
            overallStatus: "In Progress"
        },
        {
            stream: "Money Order - Web Based",
            objective: "Managing money orders digitally for improved accuracy and compliance.",
            actions: [],
            overallStatus: "In Progress"
        },
        {
            stream: "End of Month Cash Report - Web Based",
            objective: "Simplifying end-of-month cash reporting with a web-based solution.",
            actions: [],
            overallStatus: "In Progress"
        },
        {
            stream: "Petty Cash Report - Web Based",
            objective: "Simplifying the management and tracking of petty cash transactions to ensure transparency and accountability.",
            actions: [],
            overallStatus: "In Progress"
        },
        {
            stream: "Consumable Order tool",
            objective: "Improving consumable ordering and tracking for better internal inventory management.",
            actions: [],
            overallStatus: "Not Started"
        },
        {
            stream: "Contract Management System",
            objective: "Managing contracts efficiently to ensure compliance and tracking.",
            actions: [ 
                { name: "Needs Analysis", status: "Done"},
                { name: "Vendor Selection", status: "Done"},
                { name: "Implementation", status: "Done"},
                { name: "Training", status: "Done"},
                { name: "Publish", status: "Done"}
            ],
            overallStatus: "Done" 
        },
        {
            stream: "SOP Management System",
            objective: "Centralizing SOP management for accessibility and consistency.",
            actions: [ 
                { name: "Platform Setup", status: "Done"},
                { name: "SOP Migration", status: "Done"},
                { name: "User Access Setup", status: "Done"},
                { name: "Publish", status: "Done"}
            ],
            overallStatus: "Done" 
        },
        {
            stream: "Applicant Tracking System", 
            objective: "Implementing a system to streamline candidate sourcing, screening, and hiring processes.",
            actions: [
                { name: "Requirement Gathering", status: "Not Started"},
                { name: "Vendor Evaluation", status: "Not Started"},
                { name: "System Configuration", status: "Not Started"}
            ],
            overallStatus: "Not Started"
        },
        {
            stream: "Business Trip Request Redesign",
            objective: "Redesigning the business trip request process for efficiency.",
            actions: [
                { name: "Form Redesign", status: "Done" },
                { name: "Autofill data", status: "Done" },
                { name: "Workflow Redesign", status: "Done" },
                { name: "Test", status: "Done" },
                { name: "Publish", status: "Done" }
            ],
            overallStatus: "Done"
        },
        {
            stream: "Vacation Management tools and Reports",
            objective: "Streamlining vacation planning and reporting.",
            actions: [
                { name: "HO Schedule", status: "Done" },
                { name: "HO Bulk email", status: "Done" },
                { name: "HO notifications", status: "Done" },
                { name: "Store and DC Schedule", status: "Done" },
                { name: "Store and DC tracking List", status: "Done" },
                { name: "Store and DC Notification", status: "Done" },
                { name: "HO Adjustment tool", status: "Done" }
            ],
            overallStatus: "Done"
        }
    ];

    const projectsContainer = document.querySelector('.projects-container');

    function getStatusClass(status) {
        if (!status) return 'status-notstarted';
        return status.toLowerCase().replace(/\s+/g, '');
    }

    projectData.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');
        card.classList.add(`status-overall-${getStatusClass(project.overallStatus)}`);
        card.dataset.status = project.overallStatus;

        const summary = document.createElement('div');
        summary.classList.add('project-summary');

        // --- Start: Top row for name, status, and toggle icon ---
        const summaryTopRow = document.createElement('div');
        summaryTopRow.classList.add('summary-top-row');

        const projectInfo = document.createElement('div');
        projectInfo.classList.add('project-info');

        const name = document.createElement('h3');
        name.classList.add('project-name');
        name.textContent = project.stream;
        projectInfo.appendChild(name);

        const overallStatusPill = document.createElement('span');
        overallStatusPill.classList.add('status-pill', `status-${getStatusClass(project.overallStatus)}`);
        overallStatusPill.textContent = project.overallStatus;
        projectInfo.appendChild(overallStatusPill);

        summaryTopRow.appendChild(projectInfo);

        const toggleIcon = document.createElement('i');
        toggleIcon.classList.add('fas', 'fa-chevron-down', 'toggle-details');
        summaryTopRow.appendChild(toggleIcon);

        summary.appendChild(summaryTopRow);
        // --- End: Top row ---

        // --- Start: Objective in summary ---
        const objectiveSummary = document.createElement('p');
        objectiveSummary.classList.add('project-objective-summary');
        objectiveSummary.textContent = project.objective || "No specific objective defined."; // Fallback text
        summary.appendChild(objectiveSummary);
        // --- End: Objective in summary ---

        card.appendChild(summary);

        // --- Start: Details section (now primarily for actions) ---
        const details = document.createElement('div');
        details.classList.add('project-details');

        if (project.actions && project.actions.length > 0) {
            const actionsList = document.createElement('ul');
            actionsList.classList.add('actions-list');
            project.actions.forEach(action => {
                const actionItem = document.createElement('li');
                const actionNameSpan = document.createElement('span');
                actionNameSpan.textContent = action.name;
                actionItem.appendChild(actionNameSpan);

                const actionStatusPill = document.createElement('span');
                actionStatusPill.classList.add('action-status-pill', `status-${getStatusClass(action.status)}`);
                actionStatusPill.textContent = action.status;
                actionItem.appendChild(actionStatusPill);
                actionsList.appendChild(actionItem);
            });
            details.appendChild(actionsList);
        } else {
            // If no actions, display a message in the details section
            const noActionsMsg = document.createElement('p');
            noActionsMsg.textContent = "No specific sub-tasks listed.";
            noActionsMsg.style.color = "var(--text-muted)";
            noActionsMsg.style.fontStyle = "italic";
            noActionsMsg.style.fontSize = "0.8rem";
            noActionsMsg.style.paddingTop = "5px"; // Add some space
            details.appendChild(noActionsMsg);
        }

        card.appendChild(details);
        // --- End: Details section ---

        projectsContainer.appendChild(card);

        summary.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
    });
});

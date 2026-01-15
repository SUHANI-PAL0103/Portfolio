// Tab switching functionality
function openTab(tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab-btn");

  tabs.forEach(tab => tab.classList.remove("active"));
  buttons.forEach(btn => btn.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  event.target.classList.add("active");

  // Load dynamic content when switching to progress or assignment tabs
  if (tabId === 'progress') {
    loadProgressData();
  } else if (tabId === 'assignment') {
    loadAssignmentData();
  }
}

// Load Weekly Progress Data from JSON
async function loadProgressData() {
  const container = document.getElementById('progress-container');
  
  try {
    const response = await fetch('data/progress.json');
    const progressData = await response.json();
    
    container.innerHTML = '';
    
    progressData.forEach(week => {
      const card = document.createElement('div');
      card.className = 'card';
      
      card.innerHTML = `
        <h3>${week.title}</h3>
        <p class="card-date">${week.date}</p>
        <p>${week.description}</p>
        ${week.tasks ? `
          <ul>
            ${week.tasks.map(task => `<li>${task}</li>`).join('')}
          </ul>
        ` : ''}
      `;
      
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = '<p style="color: #721c24;">Error loading progress data. Make sure data/progress.json exists.</p>';
    console.error('Error loading progress:', error);
  }
}

// Load Assignment Data from JSON
async function loadAssignmentData() {
  const container = document.getElementById('assignment-container');
  
  try {
    const response = await fetch('data/assignments.json');
    const assignments = await response.json();
    
    container.innerHTML = '';
    
    assignments.forEach(assignment => {
      const item = document.createElement('div');
      item.className = 'assignment-item';
      
      const statusClass = assignment.status === 'completed' ? 'status-completed' : 
                          assignment.status === 'in-progress' ? 'status-in-progress' : 
                          'status-pending';
      
      const statusText = assignment.status === 'completed' ? '✅ Completed' : 
                         assignment.status === 'in-progress' ? '⏳ In Progress' : 
                         '📝 Pending';
      
      item.innerHTML = `
        <div class="assignment-details">
          <h3>${assignment.title}</h3>
          <p>${assignment.description}</p>
          <p><b>Due:</b> ${assignment.dueDate}</p>
          ${assignment.submittedDate ? `<p><b>Submitted:</b> ${assignment.submittedDate}</p>` : ''}
          ${assignment.grade ? `<p><b>Grade:</b> ${assignment.grade}</p>` : ''}
        </div>
        <div class="status-badge ${statusClass}">
          ${statusText}
        </div>
      `;
      
      container.appendChild(item);
    });
  } catch (error) {
    container.innerHTML = '<p style="color: #721c24;">Error loading assignment data. Make sure data/assignments.json exists.</p>';
    console.error('Error loading assignments:', error);
  }
}

// Load data on page load if tabs are active
document.addEventListener('DOMContentLoaded', function() {
  // Load initial data
  loadProgressData();
  loadAssignmentData();
});

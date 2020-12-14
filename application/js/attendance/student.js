var subjectList = ['PP','DC','ML'], 
    subPercent = [45,50,60],
    totalPercent = 75
    ;

function openSubject(subName){
    location.href = `../../html/attendance/student_subject.html?subName=${subName}`;
}

document.getElementById('subject-container').innerHTML = subjectList.map((el,index) =>{
    return(`
    <div class="card subject-container mx-2 my-2" onclick="openSubject('${el}')">
        <h5 class="card-title text-center">${el}</h5>
        
            <div id="subject${index}-donut" class="card-img donut-container"></div>
        <div class="d-flex justify-content-center">
            <h6 class="card-text">23/30</h6>
        </div>
    </div>
    `);
}).join("");


document.getElementById("back-btn").onclick = ()=> {
    location.href = '../../html/index.html';
};

var circle = new circleDonutChart('attendance-donut');

circle.draw({
    end:totalPercent,
    start:0, 
    maxValue:100, 
    titlePosition:"outer-top",  
    outerCircleColor:'#0085c8', 
    innerCircleColor:'#fefefe',
    textColor: '#616473',
    size: 200
});

subjectList.forEach((el,index)=>{
    var progress = new circleDonutChart(`subject${index}-donut`);
    progress.draw({
        end:subPercent[index],
        start:0, 
        maxValue:100, 
        titlePosition:"outer-top",  
        outerCircleColor:'#0085c8', 
        innerCircleColor:'#fefefe',
        textColor: '#616473',
        size: 200
        });
});

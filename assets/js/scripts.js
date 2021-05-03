function processDriverStandings({MRData:{StandingsTable:{StandingsLists:[raceSeason]}}}){
    console.log(raceSeason.DriverStandings)
    raceSeason.DriverStandings.forEach(createAccordion)
    addEventListenerToCollapsible()
}

function createAccordion(driverData){
    const leaderboardContainer = document.querySelector("#leaderboardList")
    const div = document.createElement("div")
    div.innerHTML = renderHTML(driverData)
    leaderboardContainer.append(div)
}  

function renderHTML(driverData){
return `<button type="button" class="collapsible"><span id="DriverStandings"><b>${driverData.points}</b> &nbsp; -  &nbsp;${driverData.Driver.givenName} ${driverData.Driver.familyName}  <br> &emsp;&emsp;&nbsp;&nbsp; <b> ${driverData.Constructors[0].name} </b></span> </button>
                    <div class="content active">
                    <div id="app"></div>          
                    <table class="stat-list">
                        <tbody>   
                    <tr>
                        <th scope="row" class="stat-key">
                            <span class="text">Team</span>
                        </th>
                        <td class="stat-value">${driverData.Constructors[0].name}</td>
                    </tr>   
                    <tr>
                        <th scope="row" class="stat-key">                           
                            <span class="text">Nationality</span>                           
                        </th>
                        <td class="stat-value">${driverData.Driver.nationality}</td>                       
                    </tr>                                           
                    <tr>
                        <th scope="row" class="stat-key">   
                            <span class="text">Points</span>
                            
                        </th>
                        <td class="stat-value">${driverData.points}</td>
                        
                    </tr>
                    <tr>
                        <th scope="row" class="stat-key">
                            
                            <span class="text">Date of birth</span>
                            
                        </th>
                        <td class="stat-value">${driverData.Driver.dateOfBirth}</td>
                        
                    </tr>
                    <br>
                        </tbody>
                    </table>
                </div>`
}





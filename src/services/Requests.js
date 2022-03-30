export async function goalsRequest() {
   const resp = await fetch('/goals.json');
   const goals = await resp.json();
   return goals;
}

export async function goalRequest(action) {
   const resp = await fetch('/goal.json');
   const goal = await resp.json();
   console.log(`Goal ${action}`, goal);
   return goal;
}

export async function goalDeleteRequest() {
   const resp = await fetch('/goal.json');
   const goalDeleted = await resp.json();
   console.log(`Goal deleted`, goalDeleted.id);
   return goalDeleted.id;
}